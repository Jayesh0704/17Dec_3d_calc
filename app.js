//Adding numbers
function insert(num) {
  document.calc.txt.value = document.calc.txt.value + num;
}

//Clearing our input bar  
function clean() {
 if(confirm("Do you want to clean all values?"))  {
  document.calc.txt.value = "";

}
}
//Deleting a number if clicked by mistake
function back() {
  document.calc.txt.value = document.calc.txt.value.substring(
    0,
    document.calc.txt.value.length - 1
  );
}

//Equalling our equation
function equals() {
  const similar = calc.txt.value;
  if (similar) {
  var x= document.calc.txt.value = eval(similar);
  
  }
  insert(num);
}


