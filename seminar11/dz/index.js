(async() =>{
    try {
        const responce = await fetch('data.json');
        if (!responce.ok) {
            throw new Error ('Failed from data.json');
        }
    const data = await responce.json();
    const products = document.querySelector('.products');
    data.forEach(({image,name,about,price}) => { 
        const productEl =`
        
        
                <div class="product__content">
                    <div class="img__container">
                    <img class="product__img" src="${image}" alt="${name}">
                    </div>
                    <div class="product__desc">
                        <h3 class="product__name">${name}</h3>
                        <p class="product__about">${about}</p>
                        <p class="product__price_label">Price: <span class="product__price">$</span>${price}</p>
                        </div>
                
            
    `
    products.insertAdjacentHTML('beforeend',productEl);
    });
} catch (error) {
    console.error(error);
}
}
) .apply();