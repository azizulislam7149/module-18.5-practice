let numbers = [2, 43, 56, 89, 98];




const get =numbers[0]

numbers[4]= 10000;
console.log(get, numbers)
const num =[ 123, 756];
num.push(76);
console.log(num)
const friends = ['rahim', 'karim', 'jashim']; 
console.log(friends.includes('rahim'));
if(friends.includes('Rahim')){
    comsole.log('ok')
}
else{
    console.log('not ok');
}
console.log(friends.indexOf('rahim'));


// task 1
const fruits = ['mango', 'banana', 'orange', 'apple',' pineapple'];
console.log(fruits[3])
fruits[2]= 'jambura'
console.log(fruits);

let places = ['bamdorban', 'coxs- bazzer', 'sajek'];
places.push('dhaka');

places.push('rangpur', 'kurigram');
places.pop();
console.log(places);

const books = ['bangla books', 'english books', 'math books', 'java script books']
if(books.includes('java script books')){
    console.log('right');
}
else{
    console.log('wrong');
}
console.log(books.includes('bangla books'));

const num8 = [12, 54, 76, 789];
console.log(Array.isArray(num8))

const num3 = [32, 756];
const num4 = [ 54, 87];
console.log(num3.concat(num4));

let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result);
let text3 = "Hello";
let text4 = "world!";
let result1 = text3.concat(" ", text4);
console.log(result1);