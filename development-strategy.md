# Project: calculator-refactor

user story:
a user can add/multiply/subtract/divide two numbers

wireframe

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| __form__ | `value1`, `value2`, `operator` | enable user to set 2 numbers and select an operator |
| __select__ | `Add`, `Minus`, `Divide`, `Multiply` | 4 options for calculating operators |
| __button__ | click | to make calculation |
| __div__ | result value | showing results to user |

## Styling

| class name | description | role |
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
| `click` | `id='btnCalc'` | `listener` |
| | | |

## Handlers

| syntax | parameters | return value | behavior |
| calculateHandler(a, b, op) | operator and 2 values | --- | --- |
| | | | |

## Logic

| syntax | parameters | return value | behavior |
| `doMath(op, a, b)` | operator and 2 values | returns the result | calculating result and tests |
| | | | |
