exports.maxSubarray = () => {

    const maxsubarr = () => {

        // let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        // let arr = [1];
        let arr = [5, 4, -1, 17, 8];
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
        let result = [];

        for (let i = 0; i < arr.length - 2; i++) {
            // Skip duplicates for the first element of the triplet
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            let start = i + 1;
            let end = arr.length - 1;

            while (start < end) {
                let currSum = arr[i] + arr[start] + arr[end];

                if (currSum === target) {
                    result.push([arr[i], arr[start], arr[end]]);

                    // Skip duplicates for the second and third elements
                    while (start < end && arr[start] === arr[start + 1]) start++;
                    while (start < end && arr[end] === arr[end - 1]) end--;

                    // Move both pointers to find the next unique triplet
                    start++;
                    end--;
                } else if (currSum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
        return result;
    };

    console.log(task_1());
};


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

//8. Longest Substring Without Repeating Characters

exports.longesubstringWithoutRepeaCh = () => {
    function lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let start = 0, maxLength = 0;

        for (let end = 0; end < s.length; end++) {
            // If character already in set, remove characters from start
            while (charSet.has(s[end])) {
                charSet.delete(s[start]);
                start++;
            }

            // Add current character to set and update maxLength
            charSet.add(s[end]);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }

    // Example usage:
    // const s = "abcabcdbb";
    const s = "abcbbabcde";
    console.log(lengthOfLongestSubstring(s)); // Output: 3 (Substring: "abc")

}

//Problem: Minimum Window Substring

exports.minWindowSubstring = () => {

    function minWindow(s, t) {
        if (t.length > s.length) return "";

        // Frequency map for t
        const tFreq = new Map();
        for (const char of t) {
            tFreq.set(char, (tFreq.get(char) || 0) + 1);
        }

        // Sliding window variables
        let start = 0, end = 0;
        let windowFreq = new Map();
        let minLength = Infinity, minStart = 0;
        let formed = 0, required = tFreq.size;

        while (end < s.length) {
            // Add character at `end` to the window
            const char = s[end];
            windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

            // If the frequency matches, increment `formed`
            console.log("windowFreq.get(char)", windowFreq.get(char))
            console.log("tFreq.get(char)", tFreq.get(char))

            if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
                formed++;
            }

            // Shrink the window from the left if valid
            while (formed === required) {
                const currentLength = end - start + 1;
                if (currentLength < minLength) {
                    minLength = currentLength;
                    minStart = start;
                }

                const startChar = s[start];
                windowFreq.set(startChar, windowFreq.get(startChar) - 1);

                if (tFreq.has(startChar) && windowFreq.get(startChar) < tFreq.get(startChar)) {
                    formed--;
                }

                start++;
            }

            // Expand the window
            end++;
        }

        return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
    }

    // Example usage
    const s = "ADOBECODEBANC";
    const t = "ABC";
    console.log(minWindow(s, t)); // Output: "BANC"


}


//Maximum Sum Subarray of Size K
//Input: arr = [2, 1, 5, 1, 3, 2], k = 3
//Output: 9

exports.maxsubArrofSizeK = () => {

    const task = () => {
        let arr = [2, 1, 5, 1, 3, 2];
        let k = 3;

        let maxSum = -Infinity;
        let currentSum = 0;
        let start = 0;

        for (let end = 0; end < arr.length; end++) {
            currentSum += arr[end]; // Add the next element to the window

            if (end >= k - 1) { // When window reaches size k
                maxSum = Math.max(maxSum, currentSum);
                currentSum -= arr[start]; // Remove the leftmost element
                start++; // Slide the window forward
            }
        }

        return maxSum;
    };

    console.log(task());


}

//Smallest Subarray with Sum ≥ S
exports.smallestSub = () => {

    const task = () => {

        let arr = [2, 1, 5, 2, 3, 2];
        let S = 7;

        let currentsum = 0;
        let minlen = Infinity;
        let start = 0;

        for (let end = 0; end < arr.length; end++) {

            currentsum = currentsum + arr[end];

            while (currentsum >= S) {
                minlen = Math.min(minlen, end - start + 1);
                currentsum = currentsum - arr[start];
                start++;

            }

        }

        return minlen == Infinity ? 0 : minlen;

    }

    console.log(task())
}


//Longest Substring with K Distinct Characters

// Input: s = "araaci", k = 2
// Output: 4
// 🔹 Approach: Expand the window while keeping track of character frequency, shrink when distinct characters exceed K.


exports.longestSubWithKDistinCh = () => {

    const task = (str, k) => {

        let maxlen = 0;
        let start = 0;

        let charMap = new Map();


        for (let end = 0; end < str.length; end++) {

            let rightchar = str[end]
            charMap.set(rightchar, (charMap.has(rightchar) || 0) + 1)

            while (charMap.size > k) {

                let leftchar = str[start];

                charMap.set(leftchar, charMap.get(leftchar) - 1)

                if (charMap.get(leftchar) == 0) {
                    charMap.delete(leftchar)
                }

                start++


            }

            maxlen = Math.max(maxlen, end - start + 1)

        }

        return maxlen


    }

    console.log(task("araaci", 2)); // Output: 4
    console.log(task("cbbebi", 3)); // Output: 5
    console.log(task("abcde", 1));  // Output: 1

}

//permutations

exports.allpermutations = () => {

    const task = (p, up) => {

        if (up == "") {
            console.log(p)
            return;
        }

        let ch = up.charAt(0);


        for (let i = 0; i <= p.length; i++) {
            let f = p.substring(0, i);
            let s = p.substring(i);
            task(f + ch + s, up.substring(1));
        }


    }

    console.log(task("", "abc"))

    console.log("xyz".substring(0))

}

exports.subsets = () => {

    const task = (p, up) => {

        if (up == '') {
            console.log(p)
            return;
        }

        let ch = up.charAt(0);

        task(p + ch, up.substring(1))
        task(p, up.substring(1))

    }

    console.log(task("", "abc"))

}

exports.nextGreaterElement = () => {

    const task = (arr) => {

        let n = arr.length;
        let result = new Array(n).fill(-1);
        let stack = [];

        for (let i = n - 1; i >= 0; i--) {

            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }

            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }

            stack.push(arr[i]);
        }

        return result

    }

    console.log(task([4, 5, 2, 10, 8]))
}


exports.longestCommonPrefix = () => {

    const task = (strs) => {

        let prefix = strs[0];

        for (let i = 1; i < strs.length; i++) {

            while (strs[i].indexOf(prefix) !== 0) {

                prefix = prefix.slice(0, prefix.length - 1)

                if (!prefix) return ""

            }

        }

        return prefix;

    }

    console.log(task(["flower", "flow", "flight"])); // Output: "fl"
    console.log(task(["dog", "racecar", "car"]));    // Output: ""
    console.log(task(["interspecies", "interstellar", "interstate"])); // Output: "inters"
    console.log(task(["apple", "ape", "april"]));    // Output: "ap"

}

exports.largestOddnumINastr = () => {

    const task = (num) => {

        for (let i = num.length - 1; i >= 0; i--) {

            if (num[i] % 2 !== 0) {
                return num.slice(0, i + 1)
            }


        }

        return ''

    }

    console.log(task("35427"));  // Output: "35427"
    console.log(task("4206"));   // Output: ""
    console.log(task("42068"));  // Output: ""
    console.log(task("123456789")); // Output: "123456789"
    console.log(task("78964"));  // Output: "789"

}

exports.firstNonRepeatingCharacter = () => {

    const task = (s) => {

        let charCount = new Map();

        for (const char of s) {

            charCount.set(char, (charCount.get(char) || 0) + 1)
        }

        for (const char of s) {

            if (charCount.get(char) == 1) {
                return char
            }

        }

        return "None";

    }



    console.log(task("leetcode")); // Output: "l"
    console.log(task("aabb"));     // Output: "None"
    console.log(task("swiss"));    // Output: "w"
    console.log(task("abcabcde")); // Output: "d"

}