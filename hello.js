
const isPalindrome = (p)=>{
    var str="";
    for(let i = p.length-1;i>=0;i--){
        str+=p[i]
    }
    return str;
}

const prompt = require("prompt-sync")();
var p = prompt("enter the string: ")
if(p===isPalindrome(p)){
    console.log("the string entered is palindrome")
}else{
    console.log("the string entered is not a palindrome")
}