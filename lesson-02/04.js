// code

const giveMeRightNumbers = (value1, value2, maximum) => {
  if (value1 === value2 && value2 <= maximum) {
      console.log('Success!');
  } else {
      console.log('Something wrong!');
  }
}
giveMeRightNumbers(201, 100, 200)