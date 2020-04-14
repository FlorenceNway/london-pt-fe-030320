const productsContainer = document.querySelector("#products");

const product_list = JSON.parse(localStorage.products)


const createProduct = () => {

    product_list.forEach(product => {

        productsContainer.innerHTML += 
        `<div>
            <img src=${product.img} />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
        </div>`

    })

    
}

createProduct()