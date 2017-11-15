const driver = {name: "Bob", address: "11 Broadway"};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = Object.assign({}, driver, {[name]: "Sam"});
  return newDriver;
}
