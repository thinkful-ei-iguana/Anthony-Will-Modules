import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
  return items.find((i) => i.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    let result = item.create(name);
    this.items.push(result);
  } catch (error) {
    console.log(`cant add item, ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  let selectedItem = this.findById(id);
  console.log(selectedItem);
  selectedItem.checked = !selectedItem.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.findById(id);
  } catch (error) {
    console.log(`cant update name, ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items = this.items.filter((i) => i.id !== id);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};
