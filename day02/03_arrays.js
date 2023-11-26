/*

Arrays -> 0 index
Dynamically change and store multiple data

*/

let supportedBrowsers = [];
//console.log(supportedBrowsers.length);

let browserNames = ['chrome', 'msedge', 'firefox'];
//console.log(browserNames[0]);
//console.log(browserNames[100]); // it will say undefined and not array index  - oob exception

browserNames[3] = 'safari'
////console.log(browserNames);
browserNames[9] = 'opera';
////console.log(browserNames);
////console.log(browserNames.length);
////console.log(browserNames[6]);

/*
Mixed Bag
*/
const mixedBags = [1,2,3,'chrome', 'firefox', true, ['sanity', 'smoke']];
//console.log(mixedBags[6]);

// String to array
let supportedBrowserNames = "chrome,msedge,firefox";
const browsers = supportedBrowserNames.split(",");

// Array to String "chrome - firefox - safari"
const joinedBrowsers = browsers.join("-");
//console.log(joinedBrowsers);

// Adding to an array and removing from an array

// Add and remove at the last index
browserNames = ['chrome', 'msedge', 'firefox'];
browserNames.push('safari');
console.log(browserNames);

browserNames.pop();
browserNames.pop();
console.log(browserNames);

// Add or remove from the start of an array
browserNames.unshift('opera');
console.log(browserNames);
browserNames.shift();
console.log(browserNames);

let nums = [2,4,5,1,3,7,6];
nums.sort();
console.log(nums)

console.log(browsers.sort());

// Spread Syntax

const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = [...arr1 ,'x', 'y', 'z']
console.log(arr2);

/*

1) Find the number of occurances.  // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)


*/
const occurances = countOccurances([2,4,5,2,1,2],2);
console.log(occurances)
function countOccurances(nums, k){
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] === k){
            count++;
        }
    }
    return count;
}

const indices = twoSum([2,4,7,8,11,14],18);
console.log(indices[0]);

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    const results = [];

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            results.push([left++, right--]);
        } else if (sum < target) {
            left++; 
        } else {
            right--;
        }
    }
    return results;
}

const index = twoSumLoops([2,4,7,8,11,14],18);
console.log(index[0]);
function twoSumLoops(nums, target) {
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                results.push([i, j]);
            }
        }
    }
    return results;
}








