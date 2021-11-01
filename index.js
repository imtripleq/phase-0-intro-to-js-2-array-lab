// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (pet) => {
  cats.push(pet);
};

const destructivelyPrependCat = (pet) => {
  cats.unshift(pet);
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
};

const appendCat = (n) => {
  const y = [...cats, n];
  return y;
};

const prependCat = (n) => {
  const y = [n, ...cats];
  return y;
};

const removeLastCat = () => {
  const y = cats.slice(0, cats.length0 - 1);
  return y;
};

const removeFirstCat = () => {
  const y = cats.slice(1);
  return y;
};
