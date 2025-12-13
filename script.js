//the code under is fully mine made up by me ;) its probably so bad that you can tell that im starting XDD
let example = ""; //here i declare my first operand that i will be taking from the user on my html site
let result = document.getElementById("result")

//in these next 10 functions of these buttons i declare what number they should add to my example string

document.getElementById("one").onclick = function(){
    example += "1"
}
document.getElementById("two").onclick = function(){
    example += "2"
} 
document.getElementById("three").onclick = function(){
    example += "3"
}       
document.getElementById("four").onclick = function(){
    example += "4"
}
document.getElementById("five").onclick = function(){
    example += "5"
}
document.getElementById("six").onclick = function(){
    example += "6"
}
document.getElementById("seven").onclick = function(){
    example += "7"
}
document.getElementById("eight").onclick = function(){
    example += "8"
}
document.getElementById("nine").onclick = function(){
    example += "9"
}
document.getElementById("zero").onclick = function(){
    example += "0"
}
//in the next 4 functions i declare the type of operator that i will use by the calculator on my site
//and save the first operand that the user typed in
document.getElementById("subtract").onclick = function(){
    firstCoupleOfNumbers = Number(example)
    mathematicalSymbol = 1
    example = ""
}
document.getElementById("sum").onclick = function(){
    firstCoupleOfNumbers = Number(example)
    mathematicalSymbol = 2
    example = ""
}
document.getElementById("multiply").onclick = function(){
    firstCoupleOfNumbers = Number(example)
    mathematicalSymbol = 3
    example = ""
}
document.getElementById("divide").onclick = function(){
    firstCoupleOfNumbers = Number(example)
    example = ""
    mathematicalSymbol = 4
}
//then in this function i parse the second operand that the user typed in to a number so i do a mathematical equation
//after that i search with a switch which operator the user chose to use and i post the results straight into my "result" label and then i reset all my operands and at the end break the switch after its done
//
document.getElementById("equal").onclick = function(){
    example = Number(example)
    switch(mathematicalSymbol){
        case 1:
            result.textContent = `result: ` + (firstCoupleOfNumbers - example)
            firstCoupleOfNumbers=0;
            example=0;
            break;
        case 2:
            result.textContent = `result: ` + (firstCoupleOfNumbers + example)
            firstCoupleOfNumbers=0;
            example=0;
            break;
        case 3:
            result.textContent =  `result: ` + firstCoupleOfNumbers * example
            firstCoupleOfNumbers=0;
            example=0;
            break;
        case 4:
            result.textContent = `result: ` + firstCoupleOfNumbers / example
            if (mathematicalSymbol==4 && example==0){
            result.textContent = `result: 0`
            }
            firstCoupleOfNumbers=0;
            example=0;
            break;
    }
}
//here i reset every variable and print out the default result
document.getElementById("reset").onclick = function(){
    example = 0;
    mathematicalSymbol = 0;
    firstCoupleOfNumbers = 0;
    result.textContent = `result: ` + (firstCoupleOfNumbers + example);
    
}