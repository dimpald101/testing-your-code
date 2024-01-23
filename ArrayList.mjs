// ArrayList.mjs

export default class ArrayList {
  constructor() {
    this.data = [];
  }

  add(add) {
    this.data.push(add);
  }

  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('Index out of bounds');
    }
    return this.data[index];
  }

  remove(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('Index out of bounds');
    }
    this.data.splice(index, 1);
  }

  size() {
    return this.data.length;
  }
}
