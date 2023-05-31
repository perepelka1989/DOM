// // Задания к 7 семинару
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", 
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// const dropdown = document.querySelectorAll('.dropdown-item');
// dropdown.forEach(el => el.classList.add('super-dropdown'));
// console.log(dropdown);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, 
// либо добавить, если такого класса у элемента не было.

// const btnNew = document.querySelector('.btn');
// btnNew.classList.toggle('btn-secondary');
// console.log(btnNew);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

// const menuNew = document.querySelector('.menu');
// menuNew.classList.remove('dropdown-menu');
// console.log(menuNew);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

// const divLink = document.querySelector('div.dropdown');
// divLink.insertAdjacentHTML('afterend','<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// const dropdownNEW = document.getElementById('dropdownMenuButton');
// dropdownNEW.id="superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby"
// равный "dropdownMenuButton" используя dataset.

// const addData = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
// addData.dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// const dropDel = document.querySelector('.dropdown-toggle');
// dropDel.removeAttribute('type');