// Search and Replace Text In String
const readline = require("readline-sync");//Import Readline Module (For Taking Input from User)

// let text="Ram is good boy butRam needrama yram vbb Ram.ram0ram";
let text = readline.question("Enter Text: ");// Take input from user (Put Some Text)
console.log(text);// Print Entire Text
let reg_input = readline.question("Enter Regex: ");// Input Search Text from user(Put that text which will search in entire string) 
let i=readline.question("Enter Radio Number");// Put any number (1. For Start Text Search in string) (2. For end Text search in string) (any other. For anywhere in string)
let reg_UpInput;//Declare Updated Regex
if (i == 1) // For Starts with case
    reg_UpInput = "^" + reg_input; // Intilize regex for Start Text search
else if (i == 2)// For ends with case
    reg_UpInput = reg_input + "$"; // Intilize regex for end Text search
else
    reg_UpInput = reg_input; // Intilize regex for anywhere text search
let mode = "ig";// Global Case Insensitive
var re = new RegExp(reg_UpInput, mode); // Regex form
console.log(re);// Print variable in regex form
let count = 0;// Intilize and Declare count variable
// Loop for number of count found in Text string
while (re.exec(text) !== null) {
    ++count;
}
console.log(count); // Print occurance of tect in string

let x=readline.question("Enter 'True' if you want to Replace text ")// Take input from user (True. If user want to replace any word) (anyother. User don't want to replace any text)
if(x=="True")
{
    let AfterreplacedText; //Declare AfterreplacedText 
    let replaceword=readline.question("Enter text that you want to replace with search word: ") // Take input from user for replace that word
    AfterreplacedText=text.replace(reg_UpInput,replaceword);// Intilize AfterreplacedText
    console.log(AfterreplacedText); //Print
}
else
console.log("User does not want to replace any word")// Print On the Console if user don't want to replace
