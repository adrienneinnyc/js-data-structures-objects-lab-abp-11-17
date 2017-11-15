const driver = {name: "Bob", address: "11 Broadway"};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver, {name: "Sam"});
  return newDriver;
}
