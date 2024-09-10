document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    addEntryToTable();
    saveEntriesToLocalStorage();
});
function addEntryToTable() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const accepted = document.getElementById('accepted').checked;

    if (!validateEmail(email) || !validateAge(dob)) {
        alert('Invalid email or age.');
        return;
    }

    const table = document.querySelector('table');
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = password;
    row.insertCell(3).textContent = dob;
    row.insertCell(4).textContent = accepted ? true:false;
}
function saveEntriesToLocalStorage() {
    const tableRows = document.querySelectorAll('table tr');
    const entries = Array.from(tableRows).slice(1).map(row => {
        return Array.from(row.cells).map(cell => cell.textContent);
    });
    localStorage.setItem('entries', JSON.stringify(entries));
}
function loadEntriesFromLocalStorage() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.forEach(entry => {
        const table = document.querySelector('table');
        const row = table.insertRow();
        entry.forEach(cellData => row.insertCell().textContent = cellData);
    });
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', loadEntriesFromLocalStorage);
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function validateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18 && age <= 55;
}
