const rest = (a, b, ...argumentos) => {
  console.log(a, b);
  console.log(argumentos);
};

// rest(1, 2, 3, 4, 5, 6);

const obj = {
  a: 1,
  b: 2,
  c: 4,
  d: 5,
};

// const { a, b, ...restObj } = obj;
// console.log(a, b);
// console.log(restObj);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...r] = arr;

console.log(a, b, r);

const useState = () => ["valor", () => {}];

const [valor, setValor] = useState();

console.log(valor, setValor);
