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
