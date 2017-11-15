const driver = {name: "Bob", address: "11 Broadway"};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

const newDriver = updateDriverWithKeyAndValue(driver, "name", "Sam")

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

destructivelyUpdateDriverWithKeyAndValue(driver, "address", "12 Broadway");

function deleteFromDriverByKey(obj, key) {
  let newObj = Object.assign({}, obj);
  delete newObj.key;
  return newObj;
}

const newDriver = deleteFromDriverByKey(driver, "name");
