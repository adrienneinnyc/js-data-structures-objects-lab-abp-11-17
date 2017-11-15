const driver = {name: "Bob", address: "42", yearsExperience: "3"};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = Object.assign({}, driver, "name", "Same");
  return newDriver;
}
