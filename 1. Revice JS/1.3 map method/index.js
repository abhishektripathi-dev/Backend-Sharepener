let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

//output: ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon']

let newArray = array.map((item)=>{
  if(item.trim() === ""){
    return "empty string"
  }else{
    return item;
  }
});

console.log(newArray)