//const link = document.querySelector('.link');
// link.textContent = 'link text js'
// link.setAttribute('href', 'https://developer.mozilla.org/ru/')

// const img = document.querySelector('.photo');
// img.setAttribute('src', 'https://carhumor.net/wp-content/uploads/2011/06/car-wallpaper-0021.jpg')


// const contentDiv = document.querySelector('.content');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'Новый текстовый элемент';
// contentDiv.appendChild(newParagraph);
// contentDiv.removeChild(newParagraph);


// const contentDiv = document.querySelector('.content');
// const newButton = document.createElement('button');
// newButton.textContent = 'Нажми меня';
// contentDiv.appendChild(newButton);

// let clickCount = 0;

// newButton.addEventListener('click', () => {
// clickCount++;
// console.log(`Количество нажатий ${clickCount}`);
// })

// const resetButton = document.createElement('button');
// resetButton.textContent = 'Сброс';
// resetButton.setAttribute('id', 'resetButton');
// resetButton.addEventListener('click', function() {
// clickCount = 0;
// console.log('Счётчик обнулён');
// })
// // const content = document.querySelector('.content');
// contentDiv.appendChild(resetButton);






// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// const idSuperLink = document.getElementById('super_link');
// console.log(idSuperLink);

// // 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// const changeText =document.querySelectorAll('.card-link');
// changeText.textContent='ссылка';
// console.log(changeText);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// const el =document.querySelectorAll('.card-body>.card-link');
// console.log(el);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// const el =document.querySelector("*[data-number='50']");
// console.log(el);

// 5. Выведите содержимое тега title в консоль.
// const title=document.querySelector('title');
// console.log(title);

// // 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// const cardTitle=document.querySelector('.card-title').parentNode;
// console.log(cardTitle);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// const contentCard = document.querySelector('.card');
// const newParagraph = document.createElement('p');
// newParagraph.textContent= 'Привет';
// contentCard.appendChild(newParagraph);

// // 8. Удалите тег h6 на странице.
// const h6= document.querySelector('h6');
// h6.remove(h6);