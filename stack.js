class Stack {
  constructor(capacity) {
      this.capacity = capacity;
      this.top = 0;
      this.array = new Array(capacity);
  }

  push(value) {
    if(this.top === this.capacity) {
      return console.log("stack Overflow");
    }
    this.array[this.top++] = value;
    return true;
  }

  pop() {
    if(this.top === 0) {
      console.log("stack under flow");
      return undefined
    }
    return this.array[--this.top];
  }

  peek() {
    if(this.top===0){
      console.log("no data");
      return undefined
    }
    return this.array[this.top-1];
  }

  isEmpty() {
    return this.array.length === 0 ? true : false;
  }

  print(){
    let res = "";
    this.array.forEach(data => {
      res+=data
    })
    console.log(res);
  }
}

const myStack = new Stack(6);
myStack.isEmpty();
myStack.push(3);
myStack.push(5);
myStack.peek();
myStack.print();
