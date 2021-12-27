var selectedRow = null;
function onFormSubmit(e){
	event.preventDefault();
	var formData = readFormData();
	if(selectedRow === null){
		insertNewRecord(formData);
	}
	else
	{

	}


}

function readFormData(){

	var formData = {};
	formData["name"] = document.getElenentById("name").value;
	formData["dob"] = document.getElenentById("dob").value;
	formData["gender"] = document.getElenentById("gender").value;
	return formData;
}	

//insert Data

function insertNewRecord(data){
	var table = document.getElenentById("storeList").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	var cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
	var cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.dob;
	var cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.gender;
	var cell4 = newRow.insertCell(4);
		cell4.innerHTML = `<button>Details</button>`
	





}	