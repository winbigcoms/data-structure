class ArrayList {
  constructor(capacity) {
      this.capacity = capacity;
      this.array = new Int32Array(capacity);
      this.length = 0;
  }
  
  isEmpty() {
    console.log(this.length === 0? true : false)
    return this.array.length ? true : false
  }

  prepend(value) {
    this.array = (value + this.array.join("")).split("").map(Str => +Str);
    this.length += 1;
    console.log(this.array)
    return this.array;
  }

  append(value) {
    let appendedString = this.array.join("") + value;
    this.array = appendedString.split("").map(Str => +Str);
    this.length += 1;
    console.log(this.array)
    return this.array;
  }

  setHead(index) {
    this.array = (this.array.slice(index).join("") + this.array.slice(0,index).join("")).split("").map(Str => +Str);
    console.log(this.array)
    return this.array;
  }

  access(index) {
    console.log(this.array[index])
    return this.array[index]
  }

  insert(index, value) {
    let cuttingArry = this.array.slice(0,index);
    let insertValue = cuttingArry.join("") + value + this.array.slice(index).join("");
    this.array = insertValue.split("").map(Str => +Str);
    this.length += 1;
    console.log(this.array);
    return this.array;
  }

  remove(index) {
    this.array = this.array.filter(item => item !== this.array[index]);
    this.length -= 1;
    console.log(this.array)
    return this.array
  }

  print() {
    console.log(this.array)
    return this.array;
  }
}

const myArray = new ArrayList(5);

myArray.isEmpty();
myArray.prepend(5);
myArray.append(5);
myArray.setHead(3);
myArray.access(1);
myArray.insert(2,4);
myArray.remove(2);