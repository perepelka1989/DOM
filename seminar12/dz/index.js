const products = document.querySelector('.products');
let basketArray = [];
let data = [];

const htmlElProduct = ({ id, name, image, price, about}) => {
    return `
    <div class="product__content">
        <div class="product__container">
            <div class="img__container">
                <div class="add-to-card d-none">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <span class="add-to-card_text" >Add to card</span>
                </div>
                <img class="product__img" data-product="${id}" src="${image}" alt="${name}">
            </div>
            <div class="product__desc">
                <h3 class="product__name">${name}</h3>
                <p class="product__about">${about}</p>
                <p class="product__price_label">Price: <span class="product__price">$</span>${price}</p>
            </div>
        </div>   
    </div>
    `
};

const htmlBasket = ({ id, name, image, price, color, size, quantity }) => {
    return `
    <div class="basket_product">
            <button class="basket_btn__del" data-product="${id}" type="button">удалить</button>
            <div class="basket_product__content">
                <img class="basket_product__img" src="${image}" alt="${name}">
                <div class="basket_product__desc">
                    <h2 class="basket_product__name">${name}</h2>
                    <p class="basket_product__price_label">Price: <span class="product__price">$${price}</span></p>
                    <p class="basket_product__color">Color: ${color}</p>
                    <p class="basket_product__size">Size: ${size}</p>
                    <div class="basket_product__qty">
                        <label class="basket_input__label">Quantity:</label>
                        <input class="basket_input__quantity" type="text" value="${quantity}">
                    </div>
                </div>
            </div>
        </div>`
};







(async() =>{
    try {
        const responce = await fetch('data.json');
        if (!responce.ok) {
            throw new Error ('Failed from data.json');
        }
        data = await responce.json();
    // const products = document.querySelector('.products');
    // data.forEach(({image,name,about,price}) => { 
        data.forEach((data) => { 
            const productEl = htmlElProduct(data);
            products.insertAdjacentHTML('beforeend', productEl);
    //     const productEl =``
    // products.insertAdjacentHTML('beforeend',productEl);
    });
} catch (error) {
    console.error(error);
}
}
) .apply();




products.addEventListener('mouseover', (e) => {
    if (e.target.className === "product__img") {
        const imgEl = e.target;
        imgEl.previousElementSibling.classList.remove('d-none');
    }
});
products.addEventListener('mouseout', (e) => {
    if (e.target.className === "product__img") {
        const imgEl = e.target;
        imgEl.previousElementSibling.classList.add('d-none');
    }
});

products.addEventListener('click', (e) => {
    if (e.target.className === 'product__img') {
        let haveProductBasket = false
        const findProduct = basketArray.forEach((el) => {
            if (Number(el.id) === Number(e.target.dataset.product)) {
                el.quantity += 1;
                haveProductBasket = true
            }
        });
        if (!haveProductBasket) {
            basketArray.push({ "id": e.target.dataset.product, "quantity": 1 });
        }

        let cartItemsEl = document.querySelector('.cart-items');
        const basketHeaderEl = document.querySelector('.basket_header');
        if (cartItemsEl) {
            cartItemsEl.remove();
            basketHeaderEl.remove();
        }
        cartItemsEl = document.createElement('div');
        cartItemsEl.className = "cart-items";
        bodyEl = document.querySelector('body');
        bodyEl.insertAdjacentElement('beforeend', cartItemsEl);
        let cartItemsData = data.filter((el) => {
            const find = basketArray.find((b) => {
                return el.id === Number(b.id);
            })
            if (find) {
                el.quantity = find.quantity;
                return el;
            } else {
                return false;
            }
        }
        );
        const basketHeader = '<div class="basket_header">Card Items</div>';
        cartItemsEl.insertAdjacentHTML('beforebegin', basketHeader);
        cartItemsData.forEach((data) => {
            const cardEls = htmlBasket(data);
            cartItemsEl.insertAdjacentHTML('beforeend', cardEls);
        });
        const deleteButtons = document.querySelectorAll('.basket_btn__del');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const product = button.closest('.basket_product');
                product.remove();
                const newCard = cartItemsData.filter((el) => {
                    return Number(el.id) !== Number(e.target.dataset.product);
                });
                cartItemsData = newCard;
                if (cartItemsData.length < 1) {
                    cartItemsEl.remove();
                    const basketHeaderEl = document.querySelector('.basket_header');
                    basketHeaderEl.remove();
                    basketArray = [];
                }
            })
        })
    }
});
