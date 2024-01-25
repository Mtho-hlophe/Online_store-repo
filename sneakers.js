
let cartCount = document.getElementById('cartCount')
let cart = document.getElementById('cart')
let addToCartBtn = document.querySelectorAll('#addToCart')

const priceSpans = document.querySelectorAll('#price')
const imageSrc = Array.from(document.querySelectorAll('img'))
imageSrc.shift(0); imageSrc.shift(0)

for(let i = 0; i<addToCartBtn.length; i++){
       // console.log(addToCartBtn)   
       var cartBtn =  addToCartBtn[i]
       cartBtn.addEventListener('click', cartAddFunc)
}
let count = 0

function cartAddFunc(e) {   
    const id = e.target.className
    
    let itemOnCart = document.createElement('div')
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
                <button id="remove" onClick = "deleteItem()">Remove</button>
            </div>`
    count++
    cartCount.innerText = count
    notify()
}

 function deleteItem() {
           
    const rmvBtn = document.querySelectorAll("#remove")
    for(let i = 0; i < rmvBtn.length; i++){
         rmvBtn[i].addEventListener("click", () => {
         rmvBtn[i].parentElement.remove()
      })
    }
    count = rmvBtn.length-1
    cartCount.innerText = count
}

var notifyMessage = document.getElementById("notify")

function notify() {
    notifyMessage.style.display = "block"
    
    setTimeout( () => {
        notifyMessage.style.display = "none"
   }, 3300)
    
}
let cartIcon = document.getElementById('cartIcon')
cartIcon.addEventListener( 'click', cartToggleDisplay )

function cartToggleDisplay() {
    if( cart.style.display === 'none') {
        cart.style.display = 'block'
    }
    else{
        cart.style.display = 'none'
    }
 }
