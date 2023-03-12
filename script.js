const template = document.querySelector('[type="template"]').innerHTML;
const productData = JSON.parse(productDataJson);

class Templator {
    constructor(template) {
        this._template = template;
    }

    compile(compObj) {
        const templateVariableRe = /\{\{(.*?)\}\}/g;
        let match;
        let result = this._template;
        
        while (match = templateVariableRe.exec(this._template)) {
            const variableName = match[1].trim();
            const data = compObj[variableName];
            result = result.replace(new RegExp(match[0], 'gi'), data);
        }
    
        return result;
    }
};

console.log(new Templator(template));

productData.forEach(elem => {
    document.querySelector('.product-box__content').insertAdjacentHTML('beforeend', (new Templator(template)).compile({
        productId: elem.id,
        productImg: elem.img,
        productName: elem.productName,
        productDescription: elem.description,
        productPrice: elem.price,
    }));
});

const productAncor = document.createElement('a');
productAncor.classList.add('product__ancor');
productAncor.href = '#';
productAncor.textContent = 'Browse All Product';
document.querySelector('.product-box__content').appendChild(productAncor);