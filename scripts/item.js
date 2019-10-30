function validateName(name) {
  if (name.length === 0) {
    throw TypeError('Name must be atleast 1 character');
  }
}

function create(name) {
  let item = {
    id: cuid(),
    name: name,
    checked: false
  };
  return item;
}

export default {
  validateName,
  create
};
