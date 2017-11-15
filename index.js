const driver = {name: "Bob", address: "11 Broadway", yearsExperience: "3"};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = Object.assign({}, driver, "name", "Same");
  return newDriver;
}
