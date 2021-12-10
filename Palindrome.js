const { times } = require("cypress/types/lodash")

function palindrome(text){
    var flag=true
    for(let i=0;i<(text.length/2);i++){
       if(text.charAt(i) !== text.charAt(text.length-(i+1))){
        flag=false
        break
       }
    }
    if(flag=== true){
        console.log(text+' is a palindrome')
    }
    else{
        console.log(text+' is not a palindrome')
    }
}

palindrome('122121')


