const templateCart = document.querySelector('.template__cart').innerHTML;
const cartData = [];// корзина

// удаление элементов и блока на коестике
document.querySelector('body').addEventListener('click', (ev) => {
    if(ev.target.className === 'dagger'){
        ev.target.parentElement.remove();
        console.log(document.querySelectorAll('.dagger').length);
        if(document.querySelectorAll('.dagger').length === 0)// если один товар - удалить блок
            document.querySelector('.cart').remove();
    }
}) ;

// мышь над блоком товаров
document.querySelector('.product-box__content').addEventListener('mouseover', (ev) => {
    if(ev.target.className == 'product__add'){// если мышь над ссылкой
        
        ev.target.onclick = () => {
            if(!document.querySelector('.cart')){// если нет блока добавляем
                const cart = document.createElement('section');
                cart.classList.add('cart');
                cart.classList.add('center');
                const h2 = document.createElement('h2');
                h2.classList.add('cart__heading');
                h2.textContent = 'Cart Items';
                cart.appendChild(h2);
                document.querySelector('.sale').after(cart);
            }

            // данные о товаре в корзину
            cartData.push(productData[ev.target.id-1]);

            // по мотивам товара добавляем блок через шаблонизатор из прошлого урока
            let elem = productData[ev.target.id-1];
            document.querySelector('.cart').insertAdjacentHTML('beforeend', (new Templator(templateCart)).compile({
                productId: elem.id,
                productImg: elem.img,
                productName: elem.name,
                productPrice: elem.price,
                productColor: elem.color,
                productSize: elem.size,
                productQuantity: elem.quantity,
            }));
        }
    }

});

