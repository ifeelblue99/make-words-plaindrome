/*
make words plaindrome

ex: "race" --> "ecarace"
*/

const sampleWord = "foreach"

function makePalindrom(word){
  
  return word.slice(1).split("").reverse().join("")+word
}


// driver code
console.log(makePalindrom(sampleWord))
