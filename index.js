document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old.');
        return;
    }
    const data = { name, email, password, dob, acceptTerms };
    let storedData = JSON.parse(localStorage.getItem('registrations')) || [];
    storedData.push(data);
    localStorage.setItem('registrations', JSON.stringify(storedData));
    const table = document.getElementById('registrationTable');
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = password;
    row.insertCell(3).textContent = dob;
    row.insertCell(4).textContent = acceptTerms ? 'Yes' : 'No';
    this.reset();
});
window.onload = function() {
    const storedData = JSON.parse(localStorage.getItem('registrations')) || [];
    const table = document.getElementById('registrationTable');
    storedData.forEach(data => {
        const row = table.insertRow();
        row.insertCell(0).textContent = data.name;
        row.insertCell(1).textContent = data.email;
        row.insertCell(2).textContent = data.password;
        row.insertCell(3).textContent = data.dob;
        row.insertCell(4).textContent = data.acceptTerms ? 'Yes' : 'No';
    });
};
