function palindrome(str){
    let cont = "";
    for (i=0;i<str.length;i++){
        cont += str[i];
    }
    if (str == cont){
        console.log("Palinfrome");
    } else{
        console.log("Not a Palindrome");
    }
}

palindrome("abba");