const debounce = (func, time) => {
  let timeout;
  return function (...args) {
    const functionCall = () => func.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};
