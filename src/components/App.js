/* from: https://survivejs.com/webpack/developing/getting-started/ */
export default (text = "Hello world!!!") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};
