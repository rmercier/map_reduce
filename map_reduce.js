/*
********************************************************************************
Function : MAP

@params : String : sentence to map
@return: Array : array of words with their value associated (1)
********************************************************************************
*/

function map(value){

  //Declaration
  var words_array;
  var result_array = [];

  //Split the string to an array of word
  words_array = value.toLowerCase().split(" ");

  //Push to the result array with the value of 1
  for (let w of words_array) {
    result_array.push([w,[1]]);
  }

  //return the mapped array
  return result_array;

}


/*
********************************************************************************
Function : Shufle and Sort

SOURCE : This implementation of sort is taken from http://www.developpez.com/

@params : Array : array give by map reduce in our case
@return: Array : array sorted
********************************************************************************
*/

function shuffleNSort(arr){

  //sort the array by key name
  var sortedArray = arr.sort();
  //get the array size for the futur Loop
  var size = sortedArray.length - 1;

  //Loop throught the array given and compare the next value to check
  //the existence of same key
   for(var i = 0; i < size; i++) {
     //Compare the keys
     if (sortedArray[i][0] == sortedArray[i+1][0]) {
       //If its the same push in the current key a 1 value more
       sortedArray[i][1].push(1);
       //remove the next key
       sortedArray.splice(i+1, 1);
       //decrement the size and iteration number
       size--;
       i--;
     }
   }
   return sortedArray;


}


/*
********************************************************************************
Function : Reduce

@params :
1 Array : list of key values map by MAP and given by the shufle and sort function
2 Function : function used to reduce the value, here (Sum)
@return: Array :
********************************************************************************
*/

function reduce(map_array, reduce_fct){

  //Perform the reduce function passed in argument 2 for every value of the map_array
  for (let array of map_array) {mo
    array[1] = reduce_fct(array[1]);
  }

  //return the map array reduced by the sum function
  return map_array;

}



/*
********************************************************************************
Function : SUM
@params : Array : Given by the reduce Function
@return : integer : output value of the sum function
********************************************************************************
*/

function sum(values){

    //Initialize the counter
    var count = 0;

    //Loop throught the array to increment the counter by the value
    for (let v of values) {
      count += v;
    }

    //return the counter
    return count;

}



/*******************************************************************************/


/*
 USE CASE :
 Map Reduce Function with the word count
*/


//Sentence given to the MAP Function
var value = "Bonjour je suis etudiant à Paris et je suis francais";
console.log("\nValue to map/reduce : " + value + "\n");

//MAP Function
var map_result = map(value);
console.log("Map Result : \n");
console.log(map_result);

//Shuffle and sort
var array_sorted = shuffleNSort(map_result);
console.log("\nShuffle and sort Result : \n");
console.log(array_sorted);


//REDUCE Function
var reduce_result = reduce(array_sorted, sum);
console.log("\nReduce Result : \n");
console.log(reduce_result);
