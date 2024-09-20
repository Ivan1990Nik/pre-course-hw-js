// code

let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};


let newPassportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk",
    },
};

newPassportMarried["married"] = true;

console.log(passportMarried);
console.log(newPassportMarried);
