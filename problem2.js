function palindrome(str){
    let cont = "";
    for (i=0;i<str.length;i++){
        cont += str[i];
    }
    if (str == cont){
        console.log("Not a Palinfrome");
    } else{
        console.log("Palindrome");
    }
}

palindrome("abba");