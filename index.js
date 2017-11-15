const driver = {name: "Bob", address: "11 Broadway"};

function updateDriverWithKeyAndValue(driver, name, Sam) {
  const newDriver = Object.assign({}, driver, {name: "Sam"});
  return newDriver;
}
