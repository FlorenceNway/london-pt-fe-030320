const productsContainer = document.querySelector("#products");

const product_list = JSON.parse(localStorage.products);

const createProduct = () => {
  product_list.forEach((product) => {
    const product_div = `<img src=${product.img} />
                            <h3>${product.name}</h3>
                            <p>${product.price}</p> `;

    const div = document.createElement("div");
    const select = document.createElement("select");
    select.id = 'select_' + product.id
    select.setAttribute('onchange',`selectQuantity(${product.id})`)

    for (let quantity = 0; quantity < product.max_quantity; quantity++) {
      const option = document.createElement("option");
      option.value = quantity;
      option.innerText = quantity;
      select.append(option);
    }

    div.innerHTML = product_div;
    div.append(select);

    productsContainer.append(div);
  });
};


let totalAmount = {};


const selectQuantity = (id) => {
    const select = document.querySelector(`#select_${id}`)
    const quantity = select.value
    let price = product_list[id - 1].price

    let each_total = calculateAmount(price ,quantity)
    totalAmount[`${id}`] = each_total
    
    console.log(totalAmount)
    total_spent()
   
}


const remaining_balance = 50

const calculateAmount = (price , quantity) => {
    let each_total = price * quantity
    return each_total   
}


const total_spent = () => {
    let sum = 0
    for(let key in totalAmount) { 
        sum += totalAmount[key]
    }

    displayBalance(sum)
}


const displayBalance = (sum) => {
    let balance = remaining_balance - sum

    const span = document.querySelector('#remaining span')
    const error_div = document.createElement('div')

    if(sum > remaining_balance) {
        const main_div = document.querySelector('#cart')
        
        error_div.className = 'error'
        error_div.innerText = 'Not enough money left for that!'
        const is_error_exist = document.querySelector('.error')

        if(!is_error_exist) {
            main_div.append(error_div)
        }

    }else if(sum < remaining_balance) {
        const is_error_exist = document.querySelector('.error')
        if(is_error_exist) {
            is_error_exist.remove()
        }
        
    }
    span.innerText = balance.toFixed(2)
}

createProduct();
