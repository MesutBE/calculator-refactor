
# Project DuckDuckGo

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Development Strategy](#development-strategy)
* [Project Status](#project-status)
* [Useful Links](#useful-links)
* [Contact](#contact)
* [Live Project](https://mesutbe.github.io/duck-duck-clone/)

## General info

This Project is created by following [this tutorial from `mmtuts`](https://www.youtube.com/watch?v=qQEYAOPWDzk) and refactoring it finished code into the files of this repository.  The development process organized using Git Branches
	
## Technologies

Project is created with:
* HTML5 /CSS3
* JScript

## Setup
Clone this repository and start using it with your editor.

## Development Strategy

# Project: calculator-refactor

user story:
a user can add/multiply/subtract/divide two numbers

Wireframe: https://wireframe.cc/NhsRQ8

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| __`<form>`__ | `value1`, `value2`, `operator` | enable user to set 2 numbers and select an operator |
| __`<select>`__ | `Add`, `Minus`, `Divide`, `Multiply` | 4 options for calculating operators |
| __`<button>`__ | click | to make calculation |
| __`<div>`__ | result value | showing results to user |

## Styling

| class name | description | role |
| --- | --- | --- |
| body | whole body of the page | --- |
| .calculator-form | form elements of the calc. | --- |
| input | user input boxes | --- |
| select | selection box | --- |
| button | button for calculate | --- |
| span | text styling | --- |
| #btnCalc | for text font | --- |
| .calculator-form:hover | for hover action  | --- |
| | | |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `click` | `id='btnCalc'` | `listener` |
| | | |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| calculateHandler(a, b, op) | operator and 2 values | --- | --- |
| | | | |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `doMath(op, a, b)` | operator and 2 values | returns the result | calculating result and tests |
| | | | |


## Project Status
Project finished

## Useful Links
https://learnjavascript.online/app.html

https://wireframe.cc/

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.




