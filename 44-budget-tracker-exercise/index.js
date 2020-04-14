const productsContainer = document.querySelector("#products");

const product_list = JSON.parse(localStorage.products)


const createProduct = () => {

    product_list.forEach(product => {

        const product_div = `<img src=${product.img} />
                            <h3>${product.name}</h3>
                            <p>${product.price}</p> `

        const div = document.createElement('div')
        
        const select = document.createElement('select')
        for(let quantity = 0; quantity < product.max_quantity; quantity++) {
            const option = document.createElement('option')
            option.value = quantity;
            option.innerText = quantity;
            select.append(option)
        } 
        
        div.innerHTML = product_div
        div.append(select)

        productsContainer.append(div)
    })
     
}

createProduct()