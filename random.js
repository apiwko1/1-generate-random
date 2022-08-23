function randomNumber(left, right){
    let r = Math.random();
    let rNumber = Math.floor( r * (right - left +1) + left );
    return rNumber;
}

function randomString(n){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randArray = [];
    let charIndex = 0;
    let randChar = '';
    for (let i = 0; i < n ; i++){
        charIndex = randomNumber(0, characters.length -1);
        randChar = characters[charIndex];
        randArray.push(randChar);
    }
    randString = randArray.join('');
    return randString;
}

function randomIntegers(left, right, n){
    let randArray = [];
    let randInt = 0;
    for (let i=0; i < n; i++){
        randInt = randomNumber(left, right);
        randArray.push(randInt);
    }
    return randArray;
}

module.exports = {
    randomNumber: randomNumber, 
    randomString: randomString, 
    randomIntegers: randomIntegers
}