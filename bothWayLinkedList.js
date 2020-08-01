class Node {
  constructor(value, prev, next) {
      this.value = value;
      this.prev = prev;
      this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
  }
  
  isEmpty() {
    return this.head === null ? true : false;
  }

  prepend(value) {
    if(this.head === null){
      this.head = new Node(value,null,null)
      return this.head
    }
    if(this.head !== null){
      this.head = new Node(value,null,this.head)
      return this.head
    }
  }

  append(value) {
    let next = this.head;
    let before = null;
    
    if(next === null){
      this.head = new Node(value,next,before);
      return this.head;
    }

    while(next !==null){
      before = next;
      next = next.next;
    }
    before.next = new Node(value,before,null);
  }

  setHead(index) {
    if(index ===0 ){
      return true;
    }
    
    let next = this.head;

    for (let i=0; i < index; i++){
      next = next.next;
    }
    next.prev = null;
    this.head = next;
    return this.head;
  }

  access(index) {
    let next = this.head;
    for (let i =0; i < index; i++){
      if(next === null){
        console.log("no data");
        return undefined;
      }
      next = next.next;
    }
    return next.value;
  }

  insert(index, value) {
    if(index === 0){
      return this.prepend(value);
    }

    let next = this.head;

    for(let i=0; i<index; i++){
      if(next === null){
        return false;
      }

      next = next.next
    }
    next.prev = new Node(value,next.prev,next);
  }

  remove(index) {
    let next = this.head;

    for(let i=0; i<index; i++){
      if(next === null){
        return false;
      }

      next = next.next;
    }
    next.next.prev = next.prev;
    next.prev.next = next.next
  }

  print() {
    let next = this.head;
    if(next ===null){
      return "";
    }

    let res = "";

    while(next !== null){
      res += `${next.value}`;
      next = next.next;
    }
    return res
  }
}