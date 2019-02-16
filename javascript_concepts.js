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
