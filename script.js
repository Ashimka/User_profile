'use strict'
const btn = document.querySelector('.form-btn');
const userProfile = {};               

//получение значений из input в обьект
  function addUserProfile() {

    userProfile.name = document.querySelector('#name').value;
    userProfile.lastName = document.querySelector('#lastName').value;
    userProfile.sity = document.querySelector('#sity').value;
    userProfile.dateBirth = document.querySelector('#DateBirth').value;
    userProfile.email = document.querySelector('#email').value;

  }

  btn.addEventListener('click', () => {
    addUserProfile();
    const out = document.querySelector('.out');

    document.querySelector('.wrap__out').classList.add('reove-block');

    out.innerHTML = `
            <h3>Анкета пользователя</h3>
            <p>Имя: ${userProfile.name}</p>
            <p>Фамилия: ${userProfile.lastName}</p>
            <p>Дата рождения: ${userProfile.dateBirth}</p>
            <p>Город: ${userProfile.sity}</p>
            <p>E-mail адрес: ${userProfile.email}</p>
    `;
    
  });