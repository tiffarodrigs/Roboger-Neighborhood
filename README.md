# _Mr. Roboger's Neighborhood_

#### By _**Tiffany Rodrigo**_

#### _A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the  substitutions made within the returned range_

## Technologies Used

* _HTML_
* _JavaScript_
* _JQuery_


## Description

_A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range
Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
These exceptions are written from least to most important._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html.in your browser_

## Web Page Link
[https://tiffarodrigs.github.io/ProgrammingLanguageSuggester/](https://tiffarodrigs.github.io/ProgrammingLanguageSuggester/)



## License

_MIT_

Copyright (c) _Jan 7th 2022_ _Tiffany Rodrigo_


## Test Driven Development-Specs

Describe: beepBoop()

Test: "It should return  0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return "0,Beep" if the number 1 is inputted"
Code: beepBoop(1);
Expected Output: 0,Beep