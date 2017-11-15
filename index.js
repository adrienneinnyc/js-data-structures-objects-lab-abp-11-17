const driver = {name: "Bob", address: "11 Broadway"};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

const newDriver = updateDriverWithKeyAndValue(driver, "name", "Sam")

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

destructivelyUpdateDriverWithKeyAndValue(driver, "address", "12 Broadway");

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  delete newDriver.key;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}

destructivelyDeleteFromDriverByKey(driver, "name")
