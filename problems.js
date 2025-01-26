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
                let currensum = arr[i] + arr[left] + arr[right];

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

    console.log(task(nums = [-1, 2, 1, -4], target = 1))
    // console.log(task(nums = [0, 0, 0], target = 1))

}

exports.removeDuplicates = () => {
    const remove = () => {

        let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

        let slow = 0;

        for (let fast = 1; fast < arr.length; fast++) {

            if (arr[fast] !== arr[slow]) {
                slow++;
                arr[slow] = arr[fast]
            }

        }

       

        return slow + 1;

    }

    console.log(remove())
}

// Subarray With Given Sum

exports.subArrwithGivensum = () => {

    const task = () => {

        let arr = [1, 4, 20, 3, 10, 5];
        let sorted = [1, 3, 4, 5, 10, 20]
        let target = 33;

        let start = 0;
        let currensum = 0;


        for (let end = 0; end < arr.length; end++) {

            currensum = currensum + arr[end];

            while (currensum > target && start <= end) {

                currensum = currensum - arr[start];
                start++;

            }

            if (currensum == target) {
                // return arr.slice(start, end + 1)
                return [start, end]
            }

        }

        return -1;



    }
    //Input: arr = [1, 4, 20, 3, 10, 5], target = 33
    //Output: [20, 3, 10]
    console.log(task())

}

exports.tripletsumProb = () => {

    const task_1 = () => {

        let arr = [-1, 0, 1, 2, -1, -4];
        let target = 0;

        arr.sort((a, b) => a - b);
        let result = []
        let count = 0;

        for (let i = 0; i < arr.length; i++) {

            let start = i + 1;
            let end = arr.length - 1;


            while (start < end) {
                let currensum = arr[i] + arr[start] + arr[end];
                if (currensum === target) {
                    // result.push(arr.slice(start, end + 1))
                    count++;
                    result.push([arr[i], arr[start], arr[end]])
                    break;
                } else if (currensum < target) {
                    start++;
                } else {
                    end--;
                }


            }

        }

        return result;

    }
    // Input: arr = [-1, 0, 1, 2, -1, -4], target = 0
    // Output: [[-1, -1, 2], [-1, 0, 1]]
    // console.log('fj')
    console.log(task_1())

}

exports.pairSumProblem = () => {

    const task = () => {

        let arr = [1, 4, 2, 3, 5, -1, 0];
        let target = 4;
        arr.sort((a, b) => a - b)

        let start = 0, end = arr.length - 1;
        let result = []

        while (start < end) {
            let currensum = arr[start] + arr[end];
            if (currensum == target && arr[start] !== 0 && arr[end] !== 0) {
                result.push([arr[start], arr[end]])
                start++;
                end--;
            } else if (currensum < target) {
                start++;
            } else {
                end--;
            }

        }

        return result;


    }
    //Input: arr = [1, 2, 3, 4, 6], target = 6
    //Output: (1, 3)
    console.log(task())

}