var formSubmit=document.querySelector('#form')

formSubmit.addEventListener('submit',(e) => {
e.preventDefault()
var firstName = document.querySelector('#firstName')
var lastName = document.querySelector('#lastName')
var address = document.querySelector('#address')
var pincode = document.querySelector('#pincode')
var gender = document.querySelector('#gender')
var food = document.querySelector('#food')
var state = document.querySelector('#state')
var country = document.querySelector('#country')


var button = document.createElement("button");
button.setAttribute("type","button");
button.innerText="submit";
document.body.append(button);
button.addEventListener("click",verify);

function verify(){
    alert("SUCCESSFUL SUBMITED");
}

var array = [firstName, lastName, address, pincode, gender, food, state, country]


var tableRow = document.createElement('tr')
var count = 0;
for(var i = 0; i < array.length; i++){
  if(array[i].value  != '') {
    
    var tableData = document.createElement('td')
    tableData.innerHTML=array[i].value
    tableRow.append(tableData)
    count++
  
  }


  
}
if(count > 2) {
  document.querySelector('tbody').append(tableRow)
}else{
  alert("Must choose at least 2 out of 5 options")
}

for(let i of array){
  i.value = ''
}

})