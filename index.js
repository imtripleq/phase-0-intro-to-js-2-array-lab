// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = () => {
  cats.push("Ralph");
};

const destructivelyPrependCat = () => {
  cats.unshift("Bob");
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
};

const appendCat = (n) => {
  const y = cats.slice();
  y.push(n);
  return y;
};

const prependCat = (n) => {
  const y = cats.slice();
  y.unshift(n);
  return y;
};

const removeLastCat = () => {
  const y = cats.slice(0, 2);
  return y;
};

const removeFirstCat = () => {
  const y = cats.slice(1);
  return y;
};
