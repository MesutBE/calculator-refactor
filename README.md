
# Project DuckDuckGo

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Development Strategy](#development-strategy)
* [Screen Capture of Project](#screen-capture-of-project)
* [Project Status](#project-status)
* [Useful Links](#useful-links)
* [Contact](#contact)
* [Live Project](https://mesutbe.github.io/calculator-refactor/)

## General info

This Project is created by following [this tutorial from `mmtuts`](https://www.youtube.com/watch?v=qQEYAOPWDzk) and refactoring it finished code into the files of this repository.  The development process organized using Git Branches
	
## Technologies

Project is created with:
* HTML5 /CSS3
* JScript

## Setup
Clone this repository and start using it with your editor.

## Development Strategy

### Project: calculator-refactor

user story:
a user can add/multiply/subtract/divide two numbers

Wireframe: https://wireframe.cc/NhsRQ8

#### DOM

| tag name | attributes | role |
| --- | --- | --- |
| __`<form>`__ | `value1`, `value2`, `operator` | enable user to set 2 numbers and select an operator |
| __`<select>`__ | `Add`, `Minus`, `Divide`, `Multiply` | 4 options for calculating operators |
| __`<button>`__ | click | to make calculation |
| __`<div>`__ | result value | showing results to user |

#### Styling

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

#### Listeners

| type | attached to | callback |
| --- | --- | --- |
| `click` | `id='btnCalc'` | `listener` |
| | | |

#### Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| calculateHandler(a, b, op) | operator and 2 values | --- | --- |
| | | | |

#### Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `doMath(op, a, b)` | operator and 2 values | returns the result | calculating result and tests |
| | | | |

## Screen Capture of Project

![Screenshot from 2020-02-07 00-06-42](https://user-images.githubusercontent.com/59531743/73986699-8f590f80-493e-11ea-8b97-5fd5a0b42c0e.png)

## Project Status
Project finished

## Useful Links
https://learnjavascript.online/app.html

https://wireframe.cc/

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.




