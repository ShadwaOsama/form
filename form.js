function focusFullName() {
    document.getElementById('fullName').style.backgroundColor = 'red';
  }

  function blurFullName() {
    var fullNameInput = document.getElementById('fullName');
    var fullNameValue = fullNameInput.value.trim();
    var fullNameError = document.getElementById('fullNameError');

    if (fullNameValue.length < 3 || fullNameValue === '') {
      fullNameError.innerText = 'Invalid name';
      fullNameInput.focus();
      fullNameInput.select();
    } else {
      fullNameError.innerText = '';
      fullNameInput.style.backgroundColor = 'white';
    }
  }

  function validatePasswords() {
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    var passwordError = document.getElementById('passwordError');

    if (password !== repeatPassword) {
      passwordError.innerText = 'Password and repeat password should be the same';
    } else {
      passwordError.innerText = '';
    }
  }

  function onSubmitForm(event) {
    var fullNameInput = document.getElementById('fullName');
    var passwordInput = document.getElementById('password');

    if (fullNameInput.value.trim().length < 3 || fullNameInput.value.trim() === '') {
      event.preventDefault();
      blurFullName();
    }

    if (passwordInput.value !== document.getElementById('repeatPassword').value) {
      event.preventDefault();
      validatePasswords();
    }
    if (fullNameInput.value.trim().length >= 3 && passwordInput.value === document.getElementById('repeatPassword').value) {
      window.location.href = "thank_you_page.html"; 
    }
  }

  