
let cartCount = document.getElementById('cartCount')
let cart = document.getElementById('cart')
let addToCartBtn = document.querySelectorAll('#addToCart')

const priceSpans = document.querySelectorAll('#price')
const imageSrc = Array.from(document.querySelectorAll('img'))
imageSrc.shift(0)
imageSrc.shift(0)

for(let i = 0; i<addToCartBtn.length; i++){
       // console.log(addToCartBtn)   
       var cartBtn =  addToCartBtn[i]
       cartBtn.addEventListener('click', cartAddFunc)
}

function cartAddFunc(e) {
    
    const id = e.target.className
    
    var itemOnCart = document.createElement('div')
    cart.appendChild(itemOnCart)
    itemOnCart.classList.add('cart')
    itemOnCart.innerHTML = `<div id="cartItem">
                 <img src="${imageSrc[id].src}">
                <div>${priceSpans[id].innerText}</div>
                  <select>
                      <option>Quantity</option> 
                     <option>1</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                  </select>
                <button id="remove">Remove</button>
            </div>`
    
    const removeBtn = document.querySelectorAll('#remove')
    for (let j = 0; j < removeBtn.length; j++) {
        removeBtn[j].addEventListener('click', ()=>{
            removeBtn[j].parentElement.remove()
        })
    }
    
}


