let gen;
function getGender(value){
  gen=value;
}
function addUser(){
  
  let tb1=document.getElementById("usersTable");
  let selectedFoodItms =[];
  for(let option of document.getElementById('food').options){
    if(option.selected){
      selectedFoodItms.push(option.value);
    }
  }
  let count= tb1.rows.length;
  let row=tb1.insertRow();
  let cell1=row.insertCell();
  let cell2=row.insertCell();
  let cell3=row.insertCell();
  let cell4=row.insertCell();
  let cell5=row.insertCell();
  let cell6=row.insertCell();
  let cell7=row.insertCell();
  let cell8=row.insertCell();
  let cell9=row.insertCell();
  cell1.innerHTML = count;
  cell2.innerHTML = document.getElementById("first-name").value;
  cell3.innerHTML = document.getElementById("last-name").value;
  cell4.innerHTML = document.getElementById("address").value;
  cell5.innerHTML = document.getElementById("pincode").value;
  cell6.innerHTML = gen;
  cell7.innerHTML = selectedFoodItms.toString();
  cell8.innerHTML = document.getElementById("state").value;
  cell9.innerHTML = document.getElementById("country").value;
  document.form.reset();

}


