// Polyfill for Safari compatibility
if (!URL.canParse) {
  URL.canParse = function (url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
}

// Ensure compatibility with older browsers
if (!Object.fromEntries) {
  Object.fromEntries = function (iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
      obj[key] = val;
      return obj;
    }, {});
  };
}
