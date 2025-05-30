// Write code that will return a random letter from your name
const name = "Shivam";

function getRandomLetter(name) {
    const randomIndex = Math.floor(Math.random() * name.length)
    return name.charAt(randomIndex);
}
console.log(getRandomLetter(name));
console.log(getRandomLetter(name));
console.log(getRandomLetter(name));
console.log(getRandomLetter(name));
console.log(getRandomLetter(name));
console.log(getRandomLetter(name));
console.log(getRandomLetter(name));