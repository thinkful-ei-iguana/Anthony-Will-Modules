import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
  items.find((i) => i === id);
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
  selectedItem.checked = !selectedItem.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    findById(id);
  } catch (error) {
    console.log(`cant update name, ${error.message}`);
  }
}

// function findAndDelete(id) {
//   findById(id);
//   let itemFilter = item.filter((i) => i === id);
//   itemFilter.splice(0, 1);
// }

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName
  //   findAndDelete
};
