// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpj8TC6W0UU9_wO4xdgShSSz-HrHR9poE",
    authDomain: "fir-project-fee70.firebaseapp.com",
    databaseURL: "https://fir-project-fee70-default-rtdb.firebaseio.com",
    projectId: "fir-project-fee70",
    storageBucket: "fir-project-fee70.appspot.com",
    messagingSenderId: "703515687904",
    appId: "1:703515687904:web:6a7d1027854f89071e8985",
    measurementId: "G-B6W8SE5HJW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

const dataForm = document.getElementById('data-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const bioInput = document.getElementById('bio');
const optionsInput = document.getElementById('options');
const ageInput = document.querySelectorAll('input[name="age"]');


dataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const bio = bioInput.value;
    const options = optionsInput.value;
    const age = Array.from(ageInput).find(input => input.checked)?.value;

    if (name.value !== '' && email.value !== '' && password.value !== '' && bio.value !== '' && options.value !== '' && age) {
        // Push the data to the database
        const newDataRef = database.ref('userdata').push();
        newDataRef.set({
            user_name: name,
            email: email,
            password: password,
            Age: age,
            bio: bio,
            job_role: options
        });
        
        
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        bioInput.value = '';
        optionsInput.value = '';
        ageInput[0].checked = '';
    }
});
