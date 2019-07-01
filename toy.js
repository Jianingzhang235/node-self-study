// ###Swap Elements

// Write a function that takes a list of numbers which is supplemented with positions that have to be swapped. Swap the numbers and return the list.

// Sample Input:

// 1 2 3 4 5 6 7 8 9 : 0-8
// 1 2 3 4 5 6 7 8 9 10 : 0-1, 1-3

// Sample Output:

// 9 2 3 4 5 6 7 8 1
// 2 4 3 1 5 6 7 8 9 10
// O: array of nums;
// I  arrray & index1, index2,// 
// c: none;
// e: edge  empty array' ? the length of the array?  the index run out of the range of the length of the array /(index1 greater than or equal to 0, and less than the 2nd index;
// the 2nd index gte the 1st index , and lte the length of the array.; otherwise return the original arryay);
// example:
//[0] =>[0]
// input: [1,2,3], 3,1 => [1,2,3]
// input: [1,2,3],  0, -1 => [1,2,3] // [3,2,1];

// sudo code:
  // var an array to take the output;
  // go thought the whole input array, find the els with index1, index2;
  // if any of array[givenindex] not ex.. .return original array;
  // if we have both, we var a tem; and give the value of index1 to the tem; 
  //