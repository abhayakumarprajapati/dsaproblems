exports.maxSubarray = () => {

    const maxsubarr = () => {

        // let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        // let arr = [1];
        let arr = [5, 4, -1, 7, 8];
        let currentsum = 0;
        let maxsum = -Infinity;

        for (let i = 0; i < arr.length; i++) {

            currentsum = Math.max(arr[i], currentsum + arr[i])

            maxsum = Math.max(currentsum, maxsum)


        }

        return maxsum;

    }

    console.log(maxsubarr())

}

exports.threesumClosest = () => {

    const task = (arr, target) => {

        arr.sort((a, b) => a - b)
        let closestsum = Infinity;
        let n = arr.length;

        for (let i = 0; i < n - 2; i++) {

            let left = i + 1;
            let right = n - 1;



            while (left < right) {
                let currensum = arr[i] + left + right;

                if (Math.abs(target - currensum) < Math.abs(target - closestsum)) {
                    closestsum = currensum;
                }

                // Move pointers
                if (currensum < target) {
                    left++; // Need a larger sum
                } else if (currensum > target) {
                    right--; // Need a smaller sum
                } else {
                    // Exact match found
                    return currensum;
                }


            }



        }

        return closestsum

    }

    // console.log(task(nums = [-1, 2, 1, -4], target = 1))
    console.log(task(nums = [0, 0, 0], target = 1))

}