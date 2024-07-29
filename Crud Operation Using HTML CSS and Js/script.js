var selectedRow = null;

function onFormSubmit(event){
    event.preventDefault();
    
    var formData = readFormData();
    if (selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();

}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["quantity"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}


//Insert Data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quantity;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onUpdate(this)'>Update</button> <button onClick='onDelete(this)'>Delete</button>`;
    
}

//Update Data
function onUpdate(td){
 selectedRow = td.parentElement.parentElement;
 document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
 document.getElementById("product").value = selectedRow.cells[1].innerHTML;
 document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
 document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}


//Delete Data

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

// reset the data
function resetForm(){
    document.getElementId('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}
