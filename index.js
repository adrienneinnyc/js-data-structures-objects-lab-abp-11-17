const driver = {name: "Bob", address: "11 Broadway"};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = Object.assign({}, obj, {key: value);
  return newDriver;
}
