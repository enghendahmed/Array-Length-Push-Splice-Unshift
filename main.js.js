
/******************************************************************     Hend Ahmed    *********************************************************/

/**************************************************************   length , push , splice    *****************************************************/

/* Literal way to create Array (Recommended way ) */
var friends = ["khaled","ahmed" , "ali" , "hend" , "heba" , "huda" , "safaa"]; // 0 1 2 3 4 5
console.log(friends);
console.log(friends.length);

/*****************************length and push to add new item in the End of the array*******************************/
/* add new item by length at the end of the array*/
friends[friends.length]= "lily"; // at the end of the array , length way increase the length of the array by one 
console.log(friends);
console.log(friends.length);

/*Add new item by push() at the end of the array */
friends.push("lara"); // at the end of the array , push way increase the length of the array by one 
console.log(friends);
console.log(friends.length);


/****************************add new item at the beginning of the array by unshift  ***********************************/

/*add new item at the beginning of the array by .unshift */
friends.unshift("nada"); // at the start of the array 
console.log(friends);
console.log(friends.length);



/***********************************add a new item in the middle of the array using splice **************************************/

/**** at the middle by deleting old items using splice  *******/
/******** splice(index to start , no. of elements to be deleted , item1 to be added , item2 to be added , item3 to be added ) ***/
// must put item between double Quotes " item 1 " .
/* we can add more than one element by splice , we can add without remove old items by put no. of elements to be deleted equals zero */

console.log(friends); // Array(10) [ "nada", "khaled", "ahmed", "ali", "hend", "heba", "huda", "safaa", "lily", "lara" ]
// start from Ahmed which has idex 2 , remove ahmed , ali and hend ..... so no. of elements to be deleted is 3 , add ola , magdi and lolo
friends.splice(2 , 3 , 'ola' , 'magdi' , 'lolo' );

console.log(friends); //Array(10) [ "nada", "khaled", "ola", "magdi", "lolo", "heba", "huda", "safaa", "lily", "lara" ]



/********************************* add new items without deleting any of the old elemments so no. of it is Zero ***************/
// start to add items from "lolo" so from index no. 4 , don't delete elements so Zero , add two items john , max (dont forget putting them in double quotes )
friends.splice(4,0,"john","max"); // so "john" will be in index 4 and "max" in index 5 .
console.log(friends); // //Array(12) [ "nada", "khaled", "ola", "magdi", "john","max","lolo","heba", "huda", "safaa", "lily", "lara" ]






 /************************************************************    Hend Ahmed    *****************************************************************/