var selectedRow = null;

function onFormSubmit() {
    console.log(formData);
    if (validate()) {
        var formData = readFormData();
        console.log(formData);
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }

        resetForm();
    }
}

function readFormData() {

    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["pseudo"] = document.getElementById("pseudo").value;
    formData["nomcomplet"] = document.getElementById("nomcomplet").value;
    formData["email"] = document.getElementById("email").value;
    formData["adresse"] = document.getElementById("adresse").value;
    formData["role"] = document.getElementById("role").value;
    formData["etat"] = document.getElementById("etat").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.id;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.pseudo;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nomcomplet;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.adresse;

    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.role;

    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.etat;

    cell4 = newRow.insertCell(7);
    cell4.innerHTML = `<button onClick="onEdit(this)" style="color : white; background-color: green; width:100%; font-weight: bolder; font-size:14px; text-aling:center; maring:2px;">Editer</button>
                       <button  onClick="onDelete(this)" style="color:white; background-color: red; width:100%; font-weight: bolder; font-size:14px; text-align:center; margin:2px;">Suppimer</button>`;
}

function resetForm() {
    document.getElementById('id').value = '';
    document.getElementById('pseudo').value = '';
    document.getElementById('nomcomplet').value = '';
    document.getElementById('email').value = '';
    document.getElementById('adresse').value = '';
    document.getElementById('role').value = '';
    document.getElementById('etat').value = '';
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('pseudo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('nomcomplet').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('adresse').value = selectedRow.cells[4].innerHTML;
    document.getElementById('role').value = selectedRow.cells[5].innerHTML;
    document.getElementById('etat').value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.pseudo;
    selectedRow.cells[2].innerHTML = formData.nomcomplet;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.adresse;
    selectedRow.cells[5].innerHTML = formData.role;
    selectedRow.cells[6].innerHTML = formData.etat;

}

function onDelete(td) {
    if (confirm('Confirmez-vous la suppression ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }

}

function validate() {
    isValid = true;
    if (document.getElementById('id').value == "" ||
        document.getElementById('pseudo').value == "" ||
        document.getElementById('nomcomplet').value == "" ||
        document.getElementById('email').value == "" ||
        document.getElementById('adresse').value == "" ||
        document.getElementById('role').value == "" ||
        document.getElementById('etat').value == "") {

        isValid = false;

        document.getElementById('idValidationError').classList.remove("hide");
        document.getElementById('pseudoValidationError').classList.remove("hide");
        document.getElementById('nomcompletValidationError').classList.remove("hide");
        document.getElementById('emailValidationError').classList.remove("hide");
        document.getElementById('adresseValidationError').classList.remove("hide");
        document.getElementById('roleValidationError').classList.remove("hide");
        document.getElementById('etatValidationError').classList.remove("hide");

    } else {
        isValid = true;
        if (!document.getElementById('idValidationError').classList.remove("hide") ||
            !document.getElementById('pseudoValidationError').classList.remove("hide") ||
            !document.getElementById('nomcompletValidationError').classList.remove("hide") ||
            !document.getElementById('emailValidationError').classList.remove("hide") ||
            !document.getElementById('adreseValidationError').classList.remove("hide") ||
            !document.getElementById('roleValidationError').classList.remove("hide") ||
            !document.getElementById('etatValidationError').classList.remove("hide")) {

            document.getElementById('idValidationError').classList.add("hide");
            document.getElementById('pseudoValidationError').classList.add("hide");
            document.getElementById('nomcompletValidationError').classList.add("hide");
            document.getElementById('emailValidationError').classList.add("hide");
            document.getElementById('adresseValidationError').classList.add("hide");
            document.getElementById('roleValidationError').classList.add("hide");
            document.getElementById('etatValidationError').classList.add("hide");
        }
    }
    return isValid;
}