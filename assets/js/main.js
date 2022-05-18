'use strict'

const openModel = () => document.getElementById('model').classList.add('active')

const closeModel = () => {
    clearFields()
    document.getElementById('model').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_student')) ?? []
const setLocalStorage = (db_student) => localStorage.setItem('db_student', JSON.stringify(db_student))

const readStudent = () => getLocalStorage()

const createStudent = (student) => {
    const db_student = getLocalStorage()
    db_student.push(student)
    setLocalStorage(db_student)
}

const updateStudent = (index, student) => {
    const db_student = readStudent()
    db_student[index] = student
    setLocalStorage(db_student)
}


const deleteStudent = (index) => {
    const db_student = readStudent()
    db_student.splice(index, 1)
    setLocalStorage(db_student)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.model-field')
    fields.forEach(field => field.value = "")
}

const saveStudent = () => {
    if (isValidFields()) {
        const student = {
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            matricule: document.getElementById('matricule').value,
            date_naissance: document.getElementById('date_naissance').value,
            lieu: document.getElementById('lieu').value,
            ville: document.getElementById('ville').value,
            nationalite: document.getElementById('nationalite').value,
            diplome: document.getElementById('diplome').value,
            domaine: document.getElementById('domaine').value,
        }
        console.log('The Cadastral student: ' + student)
        const index = document.getElementById('nom').dataset.index
        if (index == 'new') {
            createStudent(student)
            listStudent()
            closeModel()
        } else {
            updateStudent(index, student)
            listStudent()
            closeModel()
        }
    }
}


const createRow = (student, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
				<td>${student.nom}</td>
                <td>${student.prenom}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.matricule}</td>
                <td>${student.date_naissance}</td>
                <td>${student.lieu}</td>
                <td>${student.ville}</td>
                <td>${student.nationalité}</td>
                <td>${student.diplome}</td>
                <td>${student.domaine}</td>
				<td>
					<button type="button" class="button green" id="edit-${index}">Edit</button>
					<button type="button" class="button red" id="delete-${index}">Delete</button>
				</td>
			`
    document.querySelector('#tblStudent>tbody').appendChild(newRow)
}

const crearTable = () => {
    const rows = document.querySelectorAll('#tblStudent>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const listStudent = () => {
    const students = readStudent()
        // console.log(students)
    crearTable()
    students.forEach(createRow)
}

const fillFields = (student) => {
    document.getElementById('nom').value = student.nom
    document.getElementById('prenom').value = student.prenom
    document.getElementById('email').value = student.email
    document.getElementById('phone').value = student.phone
    document.getElementById('matricule').value = student.matricule
    document.getElementById('date_naissance').value = student.date_naissance
    document.getElementById('lieu').value = student.lieu
    document.getElementById('ville').value = student.ville
    document.getElementById('nationalite').value = student.nationalite
    document.getElementById('diplome').value = student.diplome
    document.getElementById('domaine').value = student.domaine

    document.getElementById('nom').dataset.index = student.index
}

const editStudent = (index) => {
    const student = readStudent()[index]
    student.index = index
    fillFields(student)
    openModel()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-')
        if (action == 'edit') {
            editStudent(index)
        } else {
            const student = readStudent()[index]
            const response = confirm(`Etes-vous sûre de vouloir supprimer ${student.nom}`)
            if (response) {
                deleteStudent(index)
                listStudent()
            }
        }
    }
}

listStudent()

document.getElementById('idStudent').addEventListener('click', openModel)
document.getElementById('modelClose').addEventListener('click', closeModel)
document.getElementById('cancel').addEventListener('click', closeModel)
document.getElementById('save').addEventListener('click', saveStudent)
document.querySelector('#tblStudent>tbody').addEventListener('click', editDelete)