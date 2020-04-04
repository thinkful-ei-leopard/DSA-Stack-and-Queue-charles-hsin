class _Node{
  constructor(data, next){
    this.data=data;
    this.next=next;
  }
}

class Stack{
  constructor(){
    this.top =null;
  }
  push(data){
    if(this.top === null){
      this.top = new _Node(data, null)
      return this.top;
    }  
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(list){
  let data = list.top;
  return data;
}

function isEmpty(list){
  let data = list.top;
  if(data === null){
    return 'This stack is empty';
  }
  else{
    return 'This stack in not empty';
  }

}

function display(list){
  let node = list.top;
  let item = node.data;
  

  while (node.next !== null){
    node = node.next;
    item += `  ${node.data}`;
  }
  return `The list is: ${item} `;
}
function main(){
  let starTrek= new Stack;
  let emptyStack = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  //console.log(peek(starTrek));
  // console.log(isEmpty(emptyStack));
  //console.log(display(starTrek));
  return starTrek;
}

//console.log(main());

//drill 3

function is_palindrome(s){
  s= s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); 
  let palStack = new Stack();
  
  for(let i = 0 ; i < s.length; i++){
    let letter = s.slice(i,i+1);
    palStack.push(letter); 
  }

  for( let i =0; i < s.length; i++){
    let foward = s.slice(i,i+1);
    let backward = palStack.pop();
    if (foward !== backward)
      return false;
  }

  return true;
}
//console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
//console.log(is_palindrome("1001"));
//console.log(is_palindrome("Tauhida"));

//drill 4

function matching(exp){
  let express =new Stack;
  //let letter = '';
  for(let i = 0 ; i < exp.length; i++){
    let letter = exp.slice(i,i+1);
    express.push(letter); 
  }
  let open = express.top;
  while (open.next !== null){
    open=open.next;
  }
 
  if(open.data === '{' && express.pop() === '}'){
    return true;
  }return false;
}
//console.log(matching('{(1+2) + (3*4)}'));

//drill 5
function mainSort(){
  let myStack = new Stack;
  myStack.push(3);
  myStack.push(53);
  myStack.push(10);
  myStack.push(23);
  sortItem(myStack);
  //console.log(display(myStack));
  return myStack;
}
//top: 53, 23, 10, 3
console.log(mainSort());


function sortItem(stack){
  let first = stack.top;
  let sortStack = new Stack;

  while(first.next !== null){
    if(first.data > first.next.data){
      
      sortStack.push(first.next)
        
    }
    
    first = first.next;
  }
  
  
  // console.log(first.data);
  console.log(sortStack) ;
}



//drill 6
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }


  enqueue(data){
    const node = new _Node(data, null);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next=node;
    }
    this.last=node;
  }

  dequeue(){
    if (this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value; 
  }

}

function peek2(list){
  let node = list.first;
  return node.data;
}

function main2(){
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  console.log(peek2(starTrekQ));
  return starTrekQ;
}

//console.log(main2());