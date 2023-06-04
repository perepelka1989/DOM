import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);


const content = document.querySelector('.content');

data.forEach(({message,name,story}) => {
    const div = document.createElement('div');
    div.classList.add('dog');

    const img = document.createElement('img');
    img.classList.add('img-dog');
    img.src=message;

    const bodyStory = document.createElement('div');
    bodyStory.classList.add('story-name');

const title = document.createElement('h2')
title.classList.add('name-dog');
title.textContent=name;
title.style.textAlign="center";
title.style.color="red";

const parag = document.createElement('p')
parag.classList.add('story-dog');
parag.textContent=story;
parag.style.textAlign="center";

bodyStory.appendChild(title);
bodyStory.appendChild(parag);
div.appendChild(img);
div.appendChild(bodyStory);

content.appendChild(div);


});
    
