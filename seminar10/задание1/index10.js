import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

data.forEach(elem => {
    const img = document.createElement('img');
    img.src= elem.message;
    document.querySelector(".content").appendChild(img)
});
    
