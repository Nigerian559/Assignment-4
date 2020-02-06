const min = function(min1, min2) {
    if (min1 <= min2)
    {
        return min1;
    }    
        return min2;
};
console.log(min(5, 98, 27)); // should output 5

const calculatecircumference = function(radius) {
let pi = 3.14;
return 2 * pi * radius
};
console.log(calculatecircumference(5))

const searchString = (letterToSearchFor, wordToSearch) => {
let numberOfCharactersFound = 0;
for(let i = 0; i <= wordToSearch.length -1; i++) {
if(wordToSearch[i] == letterToSearchFor)
{
    numberOfCharactersFound++;
}
}
return numberOfCharactersFound;
};
console.log(searchString("s", "mississippi"));
