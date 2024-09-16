// code

const giveMeRight1Numbers = (value1, value2, maximum) => {
  if (value1 === value2 && value2 <= maximum) {
      console.log('Success!');
  } else {
      console.log('Something wrong!');
  }
}
giveMeRight1Numbers(201, 100, 200)