
let patients = JSON.parse(
    localStorage.getItem("patients")
) || [];

// Save patient data
function savePatients() {
    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );
}

// CREATE AND UPDATE
document.getElementById("patientForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const patient = {
        id: document.getElementById("editIndex").value !== ""
            ? patients.find(p =>
                p.id === document.getElementById("editIndex").value
              ).id
            : "P" + Date.now(),

        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        blood: document.getElementById("blood").value,
        doctor: document.getElementById("doctor").value,
        date: document.getElementById("date").value,
        address: document.getElementById("address").value
    };

    const editId = document.getElementById("editIndex").value;

    if (editId !== "") {

        const index = patients.findIndex(p => p.id === editId);

        if (index !== -1) {
            patients[index] = patient;
        }

        alert("Patient updated successfully!");

    } else {

        patients.push(patient);

        alert("Patient added successfully!");
    }

    savePatients();
    displayPatients();
    resetForm();
});


// READ AND DISPLAY PATIENTS
function displayPatients() {

    const table = document.getElementById("patientTable");

    const search = document.getElementById("search")
        .value.toLowerCase();

    table.innerHTML = "";

    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.id.toLowerCase().includes(search)
    );

    filteredPatients.forEach(patient => {

        const row = document.createElement("tr");

        const values = [
            patient.id,
            patient.name,
            patient.age,
            patient.gender,
            patient.phone,
            patient.blood,
            patient.doctor,
            patient.date
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.onclick = () => editPatient(patient.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = () => deletePatient(patient.id);

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);

        table.appendChild(row);
    });

    document.getElementById("totalPatients").textContent =
        "Total Patients: " + patients.length;
}


// UPDATE PATIENT
function editPatient(id) {

    const patient = patients.find(p => p.id === id);

    if (!patient) return;

    document.getElementById("editIndex").value = patient.id;

    document.getElementById("name").value = patient.name;
    document.getElementById("age").value = patient.age;
    document.getElementById("gender").value = patient.gender;
    document.getElementById("phone").value = patient.phone;
    document.getElementById("email").value = patient.email;
    document.getElementById("blood").value = patient.blood;
    document.getElementById("doctor").value = patient.doctor;
    document.getElementById("date").value = patient.date;
    document.getElementById("address").value = patient.address;

    document.getElementById("formTitle").textContent =
        "Update Patient Details";

    document.getElementById("submitBtn").textContent =
        "Update Patient";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// DELETE PATIENT
function deletePatient(id) {

    if (confirm("Are you sure you want to delete this patient?")) {

        patients = patients.filter(p => p.id !== id);

        savePatients();

        displayPatients();

        alert("Patient deleted successfully!");
    }
}


// RESET FORM
function resetForm() {

    document.getElementById("patientForm").reset();

    document.getElementById("editIndex").value = "";

    document.getElementById("formTitle").textContent =
        "Add New Patient";

    document.getElementById("submitBtn").textContent =
        "Add Patient";
}


// INITIAL DISPLAY
displayPatients();
