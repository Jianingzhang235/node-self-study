// ###Unique Elements

// Write a function that takes a sorted list of numbers with duplicates. Print out the sorted list with duplicates removed.

// Sample Input:

// 1,1,1,2,2,3,3,4,4
// 2,3,4,5,5

// Sample Output:

// 1,2,3,4
// 2,3,4,5

// o:a sorted array with out duplicates;
// I:TYPE OF Input: A sorted array of number! 
// C:time comp: none?
// E: the els should not be negtive numbers;
  // 0, 1, 2, 2 ,=> 0 ,1 ,2
  // [] => [];
  // one el = itself;

 // setup an empt arr to accept the result;
   // setup an obj with the  key = the el in the arr; and true as the value  of  the key ,if the key equal to a certain el of the input arr;
   // go though the input arr, and  put the key- value pait into the obj;
   //go though the obj, and push the key into the  setted new arr;
   //return the new arr;


var removeDupli = function (arr) {
    var newArr = [];
    var obj = {};

    for(var i = 0; i < arr.length; i++) {
        for(var key in obj) {
            if(key === arr[i]) {
                obj[key] = true;
            }
        }
    }
// {1: true,...}
    for (var key in obj) {
        newArr.push(key)
    }

    return newArr.sort();
}
