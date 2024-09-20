// code


let passportWithAddress = {
 name: "Petr",
 surname: "Petrov",
 address: {
     country: "USA",
     city: "LA"
 }
};
console.log(passportWithAddress.address.city)

let newPassportWithAddress = passportWithAddress;

newPassportWithAddress.address.city = "Bobryisk";

console.log(newPassportWithAddress.address.city)