# JavaScript Trivia

- Weakly typed
- Prototyped based
    - Define what child will inherit on prototype object.
    - Child looks through own methods first than check prototype chain.
    - Stored pointer at parent’s prototype method. Chain .call
    - Memory use is less than class inheritance because class inheritance copies down the function onto the child class each time a child is initialized, whereas prototypal inheritance only sets a pointer to the prototype method.

- Single threaded meaning no ability to run things in parallel.
- Concurrent = capable to delegating multiple tasks concurrently


- Javascript engine & runtime environment
    - Provides concurrency
    - Engine interprets code and turns it into runnable commands
    - Environment provides ability to work with the outside environment.
        - SetTimeout provided by javascript runtime environment

- Callback
    - Function passed in as an argument of another function.

- Promise
    - Object that represents eventual completion or failure of an asynchronous operation.

- Hoisting
    - Moving all declarations to the top of the current scope.
    - Function declaration declaring function calling the word function.
    - Function expression is storing a function in a variable.
        - Variable is used as function and not hoisted.
        - Let and const not hoisted to give predictable results

- Primitives
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol

- JS will take primitive and coerce it into an object and find things such as length.

- Are there implicit returns in JS
    - Yes, single line arrow functions
    - Implicit returns with new keyword
    - Async functions

- 7 falser values in JS
    - 0
    - Null
    - NaN
    - False
    - ‘’
    - Undefined
    - document.all

- Var y = 1, x = y = typeof x
    - ‘Undefined’

- Null vs undefined
    - Undefined means variable been declared but not assigned a value
    - Null is an assignment value
    - Undefined is type undefined, null is type object

- What is value of this inside settimeout function?
    - Window
    - Not window if inside fat arrow

- Value of this inside of constructor function
    - Instance of new object

- Does JS pass params by value or reference?
    - Everything but primitives by reference.


- Difference between window and document
    - Yes, window is first thing loaded with majority of properties
    - Document is key on window, html, js, etc

- window.onload vs document.onload
    - Window.onload fires last when everything is loaded

- Ways to get element on Dom
    - By id
    - Classname
    - Queryselector
    - Queryselectorall
    - Tag name

- Can you use forEach for htmlcollection? Nodelist?
    - Html collection can only contain element nodes (div, span, p)
    - cannot use forEach for html collection but can over a novelist


- Query selector all returns nodelist
- Html elements have method called .parentNode.
- Create a DOM element
    - document.createElement(‘div’)

- What is reflow?
    - Critical to performance. Changes that effect the layout of the entire webpage.
    - Keep reflow to absolute minimum.
    - Use createDocumentFragment

- What is repaint?
    - Changes made to elements skin and change it visibly.
    - Expensive but not as expensive as reflow.

- Make sure JS run when Dom is ready
    - document.addEventListener(‘DOMContentloaded’, CB)

- Event bubbling
    - Event happens on element on that element then parent then up ancestor chain.
    - Capturing is the opposite of bubbling. Top down.

- event.target vs event.currentTarget
    - Target is element that triggered event
    - currentTarget is what it is bubbling up to

- Capture all text on webpage
    - document.body.innerText