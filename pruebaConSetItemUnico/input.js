const input = [1, 2, 2, 3, 4];

function sum(input = input) {
  let noRepeat = new Set(input);
  let result= 0;
  noRepeat.forEach((element) => {
    result += element;
    console.log(input);
    
  });
  return result;
}

console.log(sum(input));

 