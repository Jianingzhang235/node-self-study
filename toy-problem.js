// ###String Permutations

// Write a function that takes a string and then prints all the permutations of that string in alphabetical order. We consider that digits < upper case letters < lower case letters. The sorting should be performed in ascending order.

// Sample Input:

// hat
// abc
// Zu6

// Sample Output:

// aht,ath,hat,hta,tah,tha
// abc,acb,bac,bca,cab,cba
// 6Zu,6uZ,Z6u,Zu6,u6Z,uZ6

// O: a sorted array/ string with all the permutations in alphabatical order;
// I: String;letter/ and  single nums(0- 9), zu66 , the length >= 0;
// C: TC ? NONE
// E: take nums and letters

//step1,split the input str into an arr; consider the length of the arr;
//step2,if we push one char into a new str; consider the rest 


//  ig : hat, the first h, a ,t; then consider if the first is h, the 2nd can be a or t; if the 2nd is a , the 3rd should be t; =hat; or/hta;
//['hat', 'hta'] //a ['ath', 'aht']// t [tha, tah]; push them in to an array;
//sort the array in a;phabetical order digits < upper case letters < lower case letters;

function permutations(str) {
  var arr = str.split('');
  // simple to com...
  var len = arr.length;

  var picked;
  var rest;


  var store = [];

  if (len <= 0) {
      return store;
  }
  if (len === 1) {
      return [str];
    }
  // we pick one char from the arr;
  // we consider the rest, the rest should be arr.splice(i, 1);
   // hat, pick 'h', 
 for (var i = 0; i <= len; i++) {
   picked = arr.splice(i,1); 
//    rest = arr.

 }

} 