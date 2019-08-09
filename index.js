// # JavaScript-while loops-cw
// Classwork: JavaScript While/Do While Loops

// #### CW1
// Print -10 through 5 using a counter and while loop.

console.log("Exercice 1") 
var n = -15;
while (n < 5)
{
    n=n+5;
    console.log(n)
}

// Partial Credit:Count from -10 to 5 by 1 not by 5

//     #### CW2
// Write a While loop that counts backwards from 10 to 0
// Log the current count at the end of each iteration EXCEPT if the current count is ```5```

// var n = 11;

// while (n > 0)
// {
//     n=n-1;
//     console.log(n);

// 	if (console.log(n) === (n=
// {n=0}
// }

// NOTE : I think you just got a little lost in this probem. Here is a partial soltuion. Feel free to start here and run with it
console.log("Exercice 2") 
var counter = 10
while (counter > 0)
{
    console.log(counter);
    counter=counter-1;
}

//The probove created an infinite loop. i had to erase som of the problems to keep from chrashing
// also, ptogram is stuck in highlight mode and i cant undo it
// Asks the user ```Enter a word. Enter 'q' to quit.``` Create a while loop that will not quit until they enter 'q'.
//

// var n = 0;
// while (n<3)
// {
//     n++;
//     console.log(n);

var user = parseInt(prompt("Enter any word. Press 'q' to quit"));
var userW = prompt("Enter a word. enter q to quit");
var quit = parseInt("q");

// NOTE : parseInt() is a function not a variable

// while ( =parseInt1 )
// {

//     if (parseInt1 = parseInt2())
//     {
//         alert("That's a really cool word!")
//     }
//     else if (quit = "q")
//     {alert("You have now quit the prompt.")}
// }


//
//     #### Extra
// Expand your knowledge of Loops by reading the Loop and Iteration section on MDN:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration






















