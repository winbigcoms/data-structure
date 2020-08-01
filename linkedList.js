class Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
      this.head = null;
  }
  
  isEmpty() {
    return this.head === null ? true : false
  }

  prepend(value) {
    this.head = new Node(value,this.head);
    return this.head;
  }

  append(value) {
    // head를 따라 가서 null인 곳을 찾고 거기에 붙이기
    let next = this.head;
    let before = null;

    if(next === null){
      this.head = new Node(value,null);
      return this.head
    }
    
    while(next !== null){
      before = next;
      next = next.next;
    }

    before.next = new Node(value,null);
  }

  setHead(index) {
    if(index === 0) return

    let next = this.head;

    for(let i =0; i < index; i++){
      next = next.next
    }
    this.head = next;
    return this.head
  }

  access(index) {
    let next = this.head;
    for(let i =0; i < index; i++){
      if(next === null) {
        return undefined
      }
      next = next.next
    }
    return next.value
  }

  insert(index, value) {
    if(index === 0) {
      return this.prepend(value)
    };

    let next = this.head;
    let before = null;

    for(let i = 0; i < index; i++){
    
      if(next === null){
        return false;
      }
    
      before = next
      next = next.next
    }


    before.next = new Node(value, next.next)
    return this.head
  }

  remove(index) {
    let next = this.head;
    let before = null;
    for(let i =0; i < index; i++){
      if(index === 0) {
        if(next !== null){
          this.head = this.head.next;
          return false;
        }
      }else{
        return false;
      }
    }

    for (let i = 0; i < index ; i++){
      if(next === null){
        return false;
      }
      before = next;
      next = next.next;
    }
  }

  print() {
    let next = this.head;

    if (next === null) {
        console.log('[]');
        return;
    }

    let s = '';
    while(next !== null) {
        s += `${next.value} `
        next = next.next;
    }
    console.log(`[${s}]`);
  }
}
