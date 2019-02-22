const debounce = (func, time) => {
  let timeout;
  return function (...args) {
    const functionCall = () => func.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

const throttle = (callback, wait, immediate = false) => {
  let timeout;
  let initialCall = true;

  return function (...args) {
    const callNow = immediate && initialCall;
    const next = () => {
      callback.apply(this, args);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
};

// Reflow efficiency in the DOM
// It is much more efficient to append nodes to a documentFragment and then
// append that document fragment to the actual DOM because it only calls for
// one reflow, whereas appending nodes each time would call for multiple reflows
// For example:
const parentNode = document.getElementById('parent');

//create fragment:
const newChild = document.createElement('div');
const newGrandChild = document.createElement('p');
// better to createTextNode instead of innerText or textContent because it
// escapes html characters to prevent XSS attacks
const newTextNode = document.createTextNode('I AM THE GRANDCHILD');
newGrandChild.appendChild(newTextNode);
newChild.appendChild(newGrandChild);
parentNode.appendChild(newChild);