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

        let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5];

        let slow = 0;

        for (let fast = 1; fast < arr.length; fast++) {

            if (arr[fast] !== arr[slow]) {
                slow++;
                arr[slow] = arr[fast]
            }

        }

        return arr.slice(0, slow + 1);

    }

    console.log(remove())
}

// Subarray With Given Sum

exports.subArrwithGivensum = () => {

    const task = () => {

        let arr = [1, 4, 20, 3, 10, 5];

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
    // const s = "ADOBECODEBANC";
    // const t = "ABC";
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

            charMap.set(rightchar, (charMap.get(rightchar) || 0) + 1)

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

        return maxlen;


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

    // console.log(task([4, 5, 2, 10, 8]))
    console.log(task([1, 2, 1]))
}

//strings
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


    console.log('abcde' + 'abcde')

}


exports.isAnagram = () => {

    function task(s, t) {
        if (s.length !== t.length) return false;

        let count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of t) {
            if (!count[char]) return false;
            count[char]--;
        }

        return true;
    }

    // Test cases
    console.log(task("anagram", "nagaram")); // true
    console.log(task("rat", "car")); // false


}

exports.reverseWord = () => {
    function reverseWords(s) {
        // return s.trim().split(/\s+/).reverse().join(' ');
        return s.trim().split(/\s+/).reverse().join('')
    }

    // Test cases
    console.log(reverseWords("the sky is blue"));        // "blue is sky the"
    console.log(reverseWords("  hello world  "));       // "world hello"
    console.log(reverseWords("a good   example"));      // "example good a"
    console.log(reverseWords("  multiple   spaces  ")); // "spaces multiple"
}

//sort characters by frequency
exports.sortch = () => {

    const task = (str) => {

        let charFreq = {};

        for (let i = 0; i < str.length; i++) {

            charFreq[str[i]] = (charFreq[str[i]] || 0) + 1;

        }
        console.log(charFreq)

        console.log(Object.entries(charFreq))
        console.log(Object.entries(charFreq).sort((a, b) => b[1] - a[1]))
        console.log(Object.entries(charFreq).sort((a, b) => b[1] - a[1]).map(([char, freq]) => char.repeat(freq)))
        console.log(Object.entries(charFreq).sort((a, b) => b[1] - a[1]).map(([char, freq]) => char.repeat(freq)).join(''))



    }

    console.log(task('tree'))

}

exports.secondLargest = () => {

    const task = (arr) => {

        let max = -Infinity;
        let secondLargest = -Infinity;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] > max) {
                secondLargest = max;
                max = arr[i];
            } else if (arr[i] > secondLargest && arr[i] !== max) {
                secondLargest = arr[i]
            }

        }

        return secondLargest === -Infinity ? null : secondLargest

    }

    // console.log(task([12, 35, 1, 10, 34, 1]))
    console.log(task([10, 5, 10]))

}


//new line added

exports.twoSum = () => {

    // Input: nums = [2, 7, 11, 15], target = 9
    // Output: [0, 1]



    const task = (nums, target) => {

        let arr = nums.map((num, index) => ({ num, index })); // Store values with original indices
        console.log('nums', arr)
        arr.sort((a, b) => a.num - b.num); // Sort based on values
        console.log('nums_1', arr)
        let left = 0, right = arr.length - 1;

        while (left < right) {
            let sum = arr[left].num + arr[right].num;
            if (sum === target) {
                return [arr[left].index, arr[right].index];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return [];
    }

    let nums = [2, 18, 7, 15];
    let target = 9;
    console.log(task(nums, target))



}

//stack

exports.validParentheses = () => {

    // const task = (str) => {

    //     str = str.split('');
    //     let stack = []

    //     for (const ch of str) {
    //         if (ch == '(' || ch == '[' || ch == '{') {
    //             stack.push(ch)
    //         } else {

    //             if (stack.length == 0) {
    //                 return false
    //             }

    //             let top = stack.pop();

    //             if ((ch == ")" && top !== "(") || (ch == "]" && top !== "[") || (ch == "}" && top !== "{")) {
    //                 return false;
    //             }



    //         }
    //     }

    //     return stack.length == 0


    // }

    const task = (s) => {

        let stack = [];

        s = s.split('');

        console.log(s)

        for (let i = 0; i < s.length; i++) {

            if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
                stack.push(s[i])
            } else {
                if (stack.length == 0) {
                    return false;
                }

                let top = stack.pop();

                if ((s[i] == ")" && top !== "(") || (s[i] == "]" && top !== "[") || (s[i] == "}" && top !== "{")) {

                    return false;

                }
            }

        }

        return stack.length == 0;

    }

    console.log(task("()"));        // true
    console.log(task("()[]{}"));    // true
    console.log(task("(]"));        // false
    console.log(task("([)]"));      // false
    console.log(task("{[]}"));      // true

}
//167 leetcode
exports.Twosum2_inputarrissorted = () => {


    const task = () => {

        let numbers = [2, 7, 11, 15];
        let target = 9;

        let start = 0;
        let end = numbers.length - 1;

        while (start < end) {

            let currentsum = numbers[start] + numbers[end];
            if (currentsum == target) {
                return [start + 1, end + 1]
            } else if (currentsum > target) {
                end--;
            } else start++

        }



        return [0, 0]

    }

    console.log(task())

    // Input: numbers = [2,7,11,15], target = 9

}

exports.numofsubarrays = () => {

    const task = () => {
        let arr = [1, 1, 2, 1, 1];

        let k = 3;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                arr[i] = 1;
            } else {
                arr[i] = 0;
            }
        }

        let obj = new Map();
        obj.set(0, 1);
        let currentsum = 0;
        let count = 0;


        for (const num of arr) {

            currentsum = currentsum + num;

            if (obj.has(currentsum - k)) {
                count = count + obj.get(currentsum - k);
            }

            obj.set(currentsum, (obj.get(currentsum) || 0) + 1)


        }

        return count;

    }

    console.log("result", task())


}
// 5. leetcode
exports.longestPalindromicSubstring = () => {
    let str = 'babad';
    let n = str.length;

    let dp = [];
    for (let i = 0; i < n; i++) {
        dp.push(new Array(n).fill(0));
    }
    console.log(dp)
    let newarr = new Array(5).fill(0)
    console.log(newarr)

    let ans = "";
    let maxlen = 0;

    for (let diff = 0; diff < n; diff++) {
        for (let i = 0, j = i + diff; j < n; i++, j++) {
            if (i == j) {
                dp[i][j] = 1;
            } else if (diff == 1) {
                dp[i][j] = (str[i] === str[j]) ? 2 : 0;
            } else {
                if (str[i] === str[j] && dp[i + 1][j - 1] > 0) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
            }

            if (dp[i][j]) {
                if ((j - i + 1) > maxlen) {
                    maxlen = j - i + 1;
                    ans = str.substring(i, j + 1);
                }
            }
        }
    }

    console.log("ans is : ", ans)
};

//17 . leetcode strings

exports.lettercombofPhonenum = () => {

    function padList(p, up) {
        if (up.length === 0) {
            console.log("up: ", [p])
            return [p];
        }

        let digit = up.charAt(0) - '0';
        let list = [];

        for (let i = (digit - 1) * 3; i < digit * 3; i++) {
            let ch = String.fromCharCode('a'.charCodeAt(0) + i);
            list = list.concat(padList(p + ch, up.substring(1)));
        }

        return list;
    }

    // Example usage:
    console.log(padList("", "12"));

}
//316 : leetcode : stack
exports.removeduplicatesletters = () => {

    let s = "alkdfjlooe";

    let str = s.split('')
    console.log(str)
    let obj = {};

    for (let i = 0; i < str.length; i++) {

        if (obj[str[i]]) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }

    let result = ""

    for (let item in obj) {

        result = result + item

    }

    console.log(result.split('').sort().join(''))
}


exports.removeduplicatesletters_optimised = () => {


    function removeDuplicateLetters(s) {
        let stack = [];
        let seen = new Set();
        console.log('set', seen)
        let lastOccurrence = {};

        // Step 1: Store the last index of each character
        for (let i = 0; i < s.length; i++) {
            lastOccurrence[s[i]] = i;
        }

        console.log(lastOccurrence)

        // Step 2: Iterate over the string
        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            // Skip if already in the stack
            if (seen.has(char)) continue;

            // Step 3: Remove elements from stack if they appear later in the string and are greater
            while (stack.length > 0 && stack[stack.length - 1] > char && lastOccurrence[stack[stack.length - 1]] > i) {
                let removedChar = stack.pop();
                seen.delete(removedChar);
                // seen.delete(stack.pop());
            }

            // Step 4: Add the current character to the stack and mark it as seen
            stack.push(char);
            seen.add(char);
        }

        // Step 5: Return stack as string
        return stack.join('');
    }

    // Example Usage
    // let str = "bcabc";
    let str = "cbacdcbc";
    console.log(removeDuplicateLetters(str)); // Output: "abc"


}

exports.nextGreaterElement_1_brute = () => {

    let nums1 = [2, 4];
    let nums2 = [1, 2, 3, 4];
    let result = [];

    const findNextGreater = (inndex) => {

        let num = nums2[inndex];


        for (let i = inndex + 1; i < nums2.length; i++) {

            if (nums2[i] > num) {
                return nums2[i];
            }

        }
        return 0;

    }

    for (let i = 0; i < nums1.length; i++) {

        let index = nums2.indexOf(nums1[i])

        let isNext = findNextGreater(index);

        if (isNext) {
            result.push(isNext)
        } else {
            result.push(-1)
        }

    }

    console.log("result: ", result)



}

exports.nextGreaterElement_1_optimised = () => {

    let nums1 = [4, 1, 2];
    let nums2 = [1, 3, 4, 2];

    let stack = [];
    let nextGreaterMap = new Map();

    for (let num of nums2) {

        while (stack.length > 0 && stack[stack.length - 1] < num) {

            nextGreaterMap.set(stack.pop(), num)

        }
        stack.push(num)

    }

    let result = [];

    for (let num of nums1) {

        if (nextGreaterMap.get(num)) {
            result.push(nextGreaterMap.get(num))
        } else {
            result.push(-1)
        }

    }

    console.log(result)

}

exports.circulararr = () => {

    const arr = [10, 20, 30, 40, 50];
    const n = arr.length;

    for (let i = 0; i < 10; i++) {
        // console.log(arr[i % n]); // Loops through the array indefinitely
        console.log(i % n, `${i}%${n}`)
    }


}

//503 next greater element 11

exports.nextGreaterele2_brute = () => {

    // let arr = [1, 2, 3, 4, 3];
    // let arr = [1, 2, 1];
    // let result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     let found = false;
    //     if (i == arr.length - 1) {
    //         for (let k = 0; k < arr.length; k++) {

    //             if (arr[k] > arr[i]) {
    //                 found = true;
    //                 result.push(arr[k])
    //             }

    //         }
    //     } else {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             if (arr[j] > arr[i]) {
    //                 found = true;
    //                 result.push(arr[j])
    //                 break;
    //             }
    //         }
    //     }

    //     if (!found) {
    //         result.push(-1)
    //     }

    // }

    // console.log(result)

    function nextGreaterElements(nums) {
        let n = nums.length;
        let result = new Array(n).fill(-1);

        for (let i = 0; i < n; i++) {
            for (let j = 1; j < n; j++) {
                let index = (i + j) % n; // Circular indexing
                if (nums[index] > nums[i]) {
                    result[i] = nums[index];
                    break;
                }
            }
        }

        return result;
    }

    // Example Usage:
    console.log(nextGreaterElements([1, 2, 1])); // Output: [2, -1, 2]
    console.log(nextGreaterElements([5, 4, 3, 2, 1])); // Output: [-1, 5, 5, 5, 5]




}

//739 Daily tempratures : leetcode

exports.dailyTemp = () => {

    const task = () => {

        let temp = [73, 74, 75, 71, 69, 72, 76, 73]; // Output: [1,1,4,2,1,1,0,0]
        let n = temp.length;
        let res = new Array(n).fill(0);
        let stack = [];

        for (let i = 0; i < temp.length; i++) {

            while (stack.length > 0 && temp[stack[stack.length - 1]] < temp[i]) {

                let pop = stack.pop();
                res[pop] = i - pop;

            }


            stack.push(i)
        }

        return res;

    }

    console.log("result temp", task())

}

// 1475 final prices with a special discount in a shop

exports.finalPrices = () => {
    function finalprice(prices) {
        let n = prices.length;
        let result = [...prices]
        let stack = [];

        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
                let index = stack.pop();
                result[index] = prices[index] - prices[i];
            }
            stack.push(i);
        }

        return result;
    }

    // Example Usage
    let arr = [1, 2, 3, 4, 5];
    console.log(finalprice(arr)); // Output: [5, 10, 10, -1, -1]
}



exports.removekdigits = () => {

    const task = () => {

        // function removeIndices(str, indices) {

        //     // Convert string to array, filter out indices to remove, then join back
        //     let newStr = str.split('').filter((_, i) => !indices.includes(i)).join('');
        //     return Number(newStr); // Convert to number
        // }

        // let num = "1432219";
        // let k = 3;

        // let smallest = Infinity;

        // for (let i = 0; i < num.length; i++) {


        //     for (let j = i + 1; j < num.length; j++) {

        //         for (let k = j + 1; k < num.length; k++) {
        //             let result = removeIndices(num, [i, j, k]);

        //             if (result < smallest) {
        //                 smallest = result;
        //             }
        //         }
        //     }

        // }

        // return smallest;

        function removeKDigitsBruteForce(num, k) {
            if (k >= num.length) return "0"; // If we remove all digits, return "0"

            let minNum = num;

            for (let i = 0; i < k; i++) {
                let best = null;

                for (let j = 0; j < minNum.length; j++) {
                    let newNum = minNum.slice(0, j) + minNum.slice(j + 1); // Remove one digit
                    newNum = newNum.replace(/^0+/, ''); // Remove leading zeros
                    if (best === null || Number(newNum) < Number(best)) {
                        best = newNum;
                    }
                }

                minNum = best || "0"; // Update minNum to the smallest found
            }

            return minNum;
        }

        // Example Usage

        console.log(removeKDigitsBruteForce("1432219", 3)); // Output: "1219"

    }

    console.log(task())


}

const getSubstrings = (str) => {

    let substring = [];

    for (let i = 0; i < str.length; i++) {
        let temp = "";
        for (let j = i; j < str.length; j++) {
            temp = temp + str[j];

            substring.push(temp)
        }

    }
    return substring;


}


// 1781 sum of beauty of all substrings:string

exports.beautySum = () => {

    // Input: s = "aabcb"
    // Output: 5
    // Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.

    const task = () => {

        // let str = "aabcb";
        let str = "aabcbaa";
        const substrings = getSubstrings(str)

        let sum = 0;

        for (let i = 0; i < substrings.length; i++) {

            let word = substrings[i].split('')

            if (word.length == 1 || word.length == 2) {
                continue;
            } else {

                let lettercounts = {};

                for (let j = 0; j < word.length; j++) {

                    lettercounts[word[j]] = (lettercounts[word[j]] || 0) + 1;

                }

                console.log("lettercounts: ", lettercounts)



                let maxChar = '', maxCount = -Infinity;
                let minChar = '', minCount = Infinity;

                for (let [char, count] of Object.entries(lettercounts)) {
                    if (count > maxCount) {
                        maxCount = count;
                        maxChar = char;
                    }
                    if (count < minCount) {
                        minCount = count;
                        minChar = char;
                    }
                }

                sum = sum + (maxCount - minCount)

            }

        }

        return sum


    }

    console.log("result: ", task())



}

exports.prefixsumbuiild = () => {
    function buildPrefixFrequency(s) {
        let n = s.length;
        let prefix = Array.from({ length: n }, () => ({}));

        console.log("prefix_1: ", prefix)

        for (let i = 0; i < n; i++) {
            let char = s[i];

            // Copy the previous prefix count
            if (i > 0) {
                prefix[i] = { ...prefix[i - 1] };
            }

            // Increment the current character's frequency
            prefix[i][char] = (prefix[i][char] || 0) + 1;
        }
        return prefix;
    }

    // Function to get frequency of 'ch' in range [L, R]
    function getFrequency(prefix, L, R, ch) {
        if (L === 0) return prefix[R][ch] || 0;
        return (prefix[R][ch] || 0) - (prefix[L - 1][ch] || 0);
    }

    // Example Usage
    let s = "aabcb";
    let prefix = buildPrefixFrequency(s);

    console.log('prefix: ', prefix)

    console.log(getFrequency(prefix, 1, 3, 'a')); // Count of 'a' in s[1..3] => 1
    console.log(getFrequency(prefix, 0, 4, 'b')); // Count of 'b' in s[0..4] => 2
    console.log(getFrequency(prefix, 2, 4, 'c')); // Count of 'c' in s[2..4] => 1

    let obj = { a: 2, b: 2, c: 1 };

    for (let ch of Object.keys(obj)) {
        console.log("ch: ", ch)

    }

}

exports.sumofBeautyopti = () => {

    function sumOfBeauty(s) {
        let n = s.length;
        let prefix = Array.from({ length: n }, () => ({}));

        // Step 1: Build prefix frequency table
        for (let i = 0; i < n; i++) {
            let char = s[i];
            if (i > 0) {
                prefix[i] = { ...prefix[i - 1] }; // Copy previous prefix map
            }
            prefix[i][char] = (prefix[i][char] || 0) + 1;
        }

        // Step 2: Calculate sum of beauty for all substrings
        let beautySum = 0;

        for (let L = 0; L < n; L++) {
            for (let R = L; R < n; R++) {
                // Step 3: Extract frequency of characters in range [L, R]
                let freq = {};
                console.log("prefix_R: ", prefix[R])
                for (let ch of Object.keys(prefix[R])) {
                    freq[ch] = prefix[R][ch] - (L > 0 ? (prefix[L - 1][ch] || 0) : 0);
                }

                // Step 4: Compute beauty = max(freq) - min(freq > 0)
                let values = Object.values(freq).filter(x => x > 0);
                let maxFreq = Math.max(...values);
                let minFreq = Math.min(...values);

                beautySum += (maxFreq - minFreq);
            }
        }

        return beautySum;
    }

    // Example usage:
    console.log(sumOfBeauty("aabcb")); // Output: 5
    console.log(sumOfBeauty("abc"));   // Output: 3
}


// 1614. Maximum nesting depth of the parentheses

exports.maxDepth = () => {

    // Input: s = "(1)+((2))+(((3)))"
    // Output: 3
    //     Input: s = "(1+(2*3)+((8)/4))+1"
    //     Output: 3
    //     Explanation:
    // Digit 8 is inside of 3 nested parentheses in the string.

    const task = () => {
        let str = "(1+(2*3)+((8)/4))+1";

        let max = 0;
        let curr = 0;

        for (let ch of str) {

            if (ch == "(") {

                curr = curr + 1;

                if (curr > max) {
                    max = curr
                }

            } else if (ch == ")") {

                curr = curr - 1;



            }

        }

        return max;


    }


    console.log(task())

}

//451 sort characters by frequency

exports.frequencySort = () => {

    const task = () => {
        // Input: s = "tree"
        // Output: "eert"

        let s = "Aabb"

        let map = new Map();

        for (let i = 0; i < s.length; i++) {

            if (map.get(s[i])) {
                map.set(s[i], (map.get(s[i]) || 0) + 1)
            } else {
                map.set(s[i], 1)
            }

        }


        let arr = [];

        for (const element of map) {

            arr.push(element)
        }



        let sortedarr = arr.sort((a, b) => b[1] - a[1])



        let str_1 = "";

        for (let j = 0; j < sortedarr.length; j++) {

            for (let k = 0; k < sortedarr[j][1]; k++) {
                str_1 = str_1 + sortedarr[j][0]

            }

        }


        return str_1;

    }

    console.log(task())

}

//1423 : maximum Points you can obtain from cards

exports.maxScore = () => {

    // Input: cardPoints = [1,2,3,4,5,6,1], k = 3
    // Output: 12

    const task = () => {

        let cardPoints = [9, 7, 7, 9, 7, 7, 9];
        let k = 7;

        let total = cardPoints.reduce((acc, curr) => acc + curr, 0);//o(n)

        let lengthtorem = cardPoints.length - k;

        console.log(lengthtorem)

        let minsum = 0;
        let startIdx = 0;
        //sum of first k elements 

        for (let i = 0; i < lengthtorem; i++) { //O(n - k) time.

            minsum = minsum + cardPoints[i]

        }

        let windowsum = minsum;

        for (let j = lengthtorem; j < cardPoints.length; j++) { //This loop runs O(k) times

            // Each iteration performs O(1) operations.

            windowsum = windowsum - cardPoints[j - lengthtorem] + cardPoints[j]

            if (windowsum < minsum) {
                minsum = windowsum;
                startIdx = j - lengthtorem + 1;
            }

        }

        let minwindowsum = cardPoints.slice(startIdx, startIdx + lengthtorem).reduce((acc, curr) => acc + curr, 0);//which also takes O(n - k) time.
        console.log(minwindowsum)

        //overall time complexity
        //  O(n)+O(n−k)+O(k)+O(n−k)=O(n)





        let result = total - minwindowsum

        return result;


    }

    console.log(task())


    //     Space Complexity Analysis
    // The algorithm uses a few integer variables (total, lengthtorem, minsum, windowsum, startIdx, result), which are O(1).

    // slice() creates a new array of size lengthtorem, which contributes O(n - k) space.

    // Thus, the space complexity is O(n - k) ≈ O(n) in the worst case (when k is small). However, if we avoid storing the sliced array and directly use minsum, then the space complexity would be O(1).

}

function isValid(str) {

    let charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) {
            return false; // Duplicate found
        }
        charSet.add(char);
    }
    return true; // All characters are unique


}

exports.lengthOfLongestSubstring_1 = () => {

    const task = () => {

        let str = "abcbbaabcde";

        // console.log("strarr : ", getSubstrings(str))

        let allsubstr = getSubstrings(str)
        let maxlen = -Infinity;

        for (let i = 0; i < allsubstr.length; i++) {

            if (isValid(allsubstr[i])) {
                if (allsubstr[i].length > maxlen) {
                    maxlen = allsubstr[i].length
                }

            }
        }

        return maxlen;
    }

    console.log(task())

    let str = "abcbbaabcde";
    let charSet = new Set();
    for (let char of str) {

        charSet.add(char);
    }
    console.log("charset", charSet)

}

exports.numofsub_brute = () => {

    const task = () => {
        let nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
        let k = 2;

        let result = 0;

        for (let i = 0; i < nums.length; i++) {

            let countodd = 0;
            for (let j = i; j < nums.length; j++) {

                if (nums[j] % 2 !== 0) {
                    countodd++;
                }
                if (countodd == k) {
                    result++;
                }
            }

        }

        return result;
    }


    console.log("res_!: ", task())



    //ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIw1ZbEJ84510vs7Ae1wzEAnO2IMPK9BiIn5DDDORPKw abhayprajapati1000@gmail.com
}


//1358 . Number of substrings containing all three characters

exports.numberOfSubstrings = () => {

    // Input: s = "abcabc"
    // Output: 10
    // Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

    const task = () => {

        let s = "abcabc";

        let count = { a: 0, b: 0, c: 0 }; // frequency map for a, b, c
        let left = 0;
        let result = 0;

        for (let right = 0; right < s.length; right++) {
            count[s[right]]++; // include character at right

            // check if current window has at least one a, b, and c
            while (count.a > 0 && count.b > 0 && count.c > 0) {
                result += s.length - right; // count all valid substrings from left to end
                count[s[left]]--; // shrink window from the left
                left++;
            }
        }

        return result;


    }

    console.log(task())

}