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

    // проверка !пустой input
    //name
    if (document.querySelector('#name').value !== '') {
      userProfile.name = document.querySelector('#name').value;
    }  
    if (document.querySelector('#name').value === '') {
      document.querySelector('#name').style.border ='2px solid red';
      
      return document.querySelector('.out').textContent = `Все поля должны быть заполнены`;
    } 

    // lastName
    if (document.querySelector('#lastName').value !== '') {
      userProfile.name = document.querySelector('#lastName').value;
    }  
    if (document.querySelector('#lastName').value === '') {
      document.querySelector('#lastName').style.border ='2px solid red';
      
      return document.querySelector('.out').textContent = `Все поля должны быть заполнены`;
    }

    //sity
    if (document.querySelector('#sity').value !== '') {
      userProfile.name = document.querySelector('#sity').value;
    }  
    if (document.querySelector('#sity').value === '') {
      document.querySelector('#sity').style.border ='2px solid red';
      
      return document.querySelector('.out').textContent = `Все поля должны быть заполнены`;
    }

    //DateBirth
    if (document.querySelector('#DateBirth').value !== '') {
      userProfile.name = document.querySelector('#DateBirth').value;
    }  
    if (document.querySelector('#DateBirth').value === '') {
      document.querySelector('#DateBirth').style.border ='2px solid red';
      
      return document.querySelector('.out').textContent = `Все поля должны быть заполнены`;
    }

    //email
    if (document.querySelector('#email').value !== '') {
      userProfile.name = document.querySelector('#email').value;
    }  
    if (document.querySelector('#email').value === '') {
      document.querySelector('#email').style.border ='2px solid red';
      
      return document.querySelector('.out').textContent = `Все поля должны быть заполнены`;
    }

    // скрывает анкету
    document.querySelector('.wrap__out').classList.add('reove-block');

    // Выводит данные пользователя на страницу
    out.innerHTML = `
            <h3>Анкета пользователя</h3>
            <p>Имя: ${userProfile.name}</p>
            <p>Фамилия: ${userProfile.lastName}</p>
            <p>Дата рождения: ${userProfile.dateBirth}</p>
            <p>Город: ${userProfile.sity}</p>
            <p>E-mail адрес: ${userProfile.email}</p>
    `;
    
  });