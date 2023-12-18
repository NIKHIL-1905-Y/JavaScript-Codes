const marvel_heros = ["thor","Ironman","spiderman"]

const dc = ["superman","flash","batman"]

const newArr = [...marvel_heros,...dc] //Using spread operators
const concatArr = marvel_heros.concat(dc)//Merging two arrays
console.log(newArr);
console.log(concatArr);
