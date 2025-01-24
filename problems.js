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