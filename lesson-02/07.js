// code

let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

console.log(passportMarried);

let newPassportMarried = passportMarried;

newPassportMarried["married"] = true;

console.log(newPassportMarried);
