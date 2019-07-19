interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "subin",
  age: 30,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you ar ${person.age}, you are a ${
    person.gender
  }`;
};

console.log(sayHi(person));

export {};
