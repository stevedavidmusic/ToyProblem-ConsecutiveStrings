// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

longestConsec = (arr, num) => {
    if(num > arr.length){
      return ''
    }
    var answer = []
    for (let i = 0; i < arr.length; i++){
      var copyArr = [...arr]
      var splicedCopy = [...copyArr.splice(i, num)]
      var copyToStr = splicedCopy.join('')
      var answerToStr = answer.join('')
      if(answerToStr.length < copyToStr.length){
        answer = [copyToStr]
      }
    }
    return answer.join('')
  } 
  
  console.log(longestConsec([ 'zone', 'abigail', 'theta', 'form', 'libe', 'zas' ], 2), "EXPECTED: 'abigailtheta'") 
  //Expected: 'abigailtheta'
  
  console.log(longestConsec(['ejjjjmmtthh',
    'zxxuueeg',
    'aanlljrrrxx',
    'dqqqaaabbb',
    'oocccffuucccjjjkkkjyyyeehh'], 1), "EXPECTED: 'oocccffuucccjjjkkkjyyyeehh'")
    // Expected: 'oocccffuucccjjjkkkjyyyeehh'
  
  console.log(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu' ], 2), "EXPECTED 'wlwsasphmxxowiaxujylentrklctozmymu'")
  // Expected: 'wlwsasphmxxowiaxujylentrklctozmymu'
  
  console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz' ], 3), "EXPECTED 'ixoyx3452zzzzzzzzzzzz'")
  
  