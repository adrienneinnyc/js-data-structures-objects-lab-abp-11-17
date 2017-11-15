const driver = {name: "Bob", age: "42", yearsExperience: "3"};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = Object.assign({}, driver, "hobby", "chess");
  return newDriver;
}