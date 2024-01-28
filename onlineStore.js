
const menuBtn = document.getElementById('menu')
const uList = document.querySelector('ul')
let body = document.querySelector('body')

body.addEventListener('click', (e)=>{
    if (e.target == menuBtn && uList.style.display === 'none') {
        uList.style.display = 'block'
    }
    else if (e.target == menuBtn && uList.style.display === 'block'){
        uList.style.display = 'none'
    }
    else {
        uList.style.display = 'none'
    }
})

// repetetive code is definitely not neat code. 

var imageDiv = document.querySelector('.collection1')
var imageDiv2 = document.querySelector('.collection2')
var imageDiv3 = document.querySelector('.collection3')
var imageDiv4 = document.querySelector('.collection4')

var imageDiv12 = document.querySelector('.collection11')
var imageDiv13 = document.querySelector('.collection12')
var imageDiv14 = document.querySelector('.collection13')
var imageDiv15 = document.querySelector('.collection14')

var imageDiv22 = document.querySelector('.collection21')
var imageDiv23 = document.querySelector('.collection22')
var imageDiv24 = document.querySelector('.collection23')
var imageDiv25 = document.querySelector('.collection24')

function changeBackground() {
                        
        imageDiv.style.backgroundImage = "url('images - 2024-01-10T200735.733.jpeg')"
        setTimeout(()=>{
            imageDiv.style.backgroundImage = "url('images - 2024-01-10T201231.719.jpeg')"
                setTimeout(()=>{
                imageDiv.style.backgroundImage = "url('images - 2024-01-10T111234.521.jpeg')"
                    setTimeout(()=>{
                    changeBackground()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground2() {
                        
        imageDiv2.style.backgroundImage = "url('download (8).jpeg')"
        setTimeout(()=>{
            imageDiv2.style.backgroundImage = "url('images - 2024-01-10T123431.118.jpeg')"
                setTimeout(()=>{
                imageDiv2.style.backgroundImage = "url('images - 2024-01-10T194347.469.jpeg')"
                    setTimeout(()=>{
                    changeBackground2()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground3() {
                        
        imageDiv3.style.backgroundImage = "url('images - 2024-01-10T194523.660.jpeg')"
        setTimeout(()=>{
            imageDiv3.style.backgroundImage = "url('images - 2024-01-10T194445.636.jpeg')"
                setTimeout(()=>{
                imageDiv3.style.backgroundImage = "url('images - 2024-01-10T194459.641.jpeg')"
                    setTimeout(()=>{
                    changeBackground3()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground4() {
                        
        imageDiv4.style.backgroundImage = "url('images - 2024-01-10T123541.340.jpeg')"
        setTimeout(()=>{
            imageDiv4.style.backgroundImage = "url('images - 2024-01-10T194434.541.jpeg')"
                setTimeout(()=>{
                imageDiv4.style.backgroundImage = "url('images - 2024-01-10T201147.027.jpeg')"
                    setTimeout(()=>{
                    changeBackground4()
                },4000)
            },4000)
        },4000)
        
}

// jersey

function changeBackground12() {
                        
        imageDiv12.style.backgroundImage = "url('shopping (14).jpeg')"
        setTimeout(()=>{
            imageDiv12.style.backgroundImage = "url('shopping (15).jpeg')"
                setTimeout(()=>{
                imageDiv12.style.backgroundImage = "url('shopping (16).jpeg')"
                    setTimeout(()=>{
                    changeBackground12()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground13() {
                        
        imageDiv13.style.backgroundImage = "url('shopping (17).jpeg')"
        setTimeout(()=>{
            imageDiv13.style.backgroundImage = "url('images - 2024-01-10T225721.511.jpeg')"
                setTimeout(()=>{
                imageDiv13.style.backgroundImage = "url('images - 2024-01-10T225700.607.jpeg')"
                    setTimeout(()=>{
                    changeBackground13()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground14() {
                        
        imageDiv14.style.backgroundImage = "url('images - 2024-01-10T225712.101.jpeg')"
        setTimeout(()=>{
            imageDiv14.style.backgroundImage = "url('images - 2024-01-10T225744.169.jpeg')"
                setTimeout(()=>{
                imageDiv14.style.backgroundImage = "url('images - 2024-01-10T225732.201.jpeg')"
                    setTimeout(()=>{
                    changeBackground14()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground15() {
                        
        imageDiv15.style.backgroundImage = "url('images - 2024-01-10T225817.888.jpeg')"
        setTimeout(()=>{
            imageDiv15.style.backgroundImage = "url('shopping (18).jpeg')"
                setTimeout(()=>{
                imageDiv15.style.backgroundImage = "url('shopping (19).jpeg')"
                    setTimeout(()=>{
                    changeBackground15()
                },4000)
            },4000)
        },4000)
        
}

// Shirt

function changeBackground22() {
                        
        imageDiv22.style.backgroundImage = "url('images - 2024-01-11T081511.551.jpeg')"
        setTimeout(()=>{
            imageDiv22.style.backgroundImage = "url('images (4).png')"
                setTimeout(()=>{
                imageDiv22.style.backgroundImage = "url('images - 2024-01-11T081501.518.jpeg')"
                    setTimeout(()=>{
                    changeBackground22()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground23() {
                        
        imageDiv23.style.backgroundImage = "url('images - 2024-01-11T081220.384.jpeg')"
        setTimeout(()=>{
            imageDiv23.style.backgroundImage = "url('images - 2024-01-11T081209.421.jpeg')"
                setTimeout(()=>{
                imageDiv23.style.backgroundImage = "url('images - 2024-01-11T081233.971.jpeg')"
                    setTimeout(()=>{
                    changeBackground23()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground24() {
                        
        imageDiv24.style.backgroundImage = "url('images - 2024-01-11T081448.570.jpeg')"
        setTimeout(()=>{
            imageDiv14.style.backgroundImage = "url('images - 2024-01-11T081308.309.jpeg')"
                setTimeout(()=>{
                imageDiv24.style.backgroundImage = "url('ssrco,slim_fit_t_shirt,mens,101010_01c5ca27c6,front,square_product,600x600.jpg')"
                    setTimeout(()=>{
                    changeBackground24()
                },4000)
            },4000)
        },4000)
        
}
function changeBackground25() {
                        
        imageDiv25.style.backgroundImage = "url('images - 2024-01-11T081418.171.jpeg')"
        setTimeout(()=>{
            imageDiv25.style.backgroundImage = "url('images - 2024-01-11T081358.613.jpeg')"
                setTimeout(()=>{
                imageDiv25.style.backgroundImage = "url('images - 2024-01-11T081342.099.jpeg')"
                    setTimeout(()=>{
                    changeBackground25()
                },4000)
            },4000)
        },4000)
        
}


changeBackground()
changeBackground2()
changeBackground3()
changeBackground4()

changeBackground12()
changeBackground13()
changeBackground14()
changeBackground15()

changeBackground22()
changeBackground23()
changeBackground24()
changeBackground25()

const hideCollectionBtn = document.getElementById('hideIcon')
const showCollectionBtn = document.getElementById('showIcon')

const hideCollectionBtn2 = document.getElementById('hideIcon2')
const showCollectionBtn2 = document.getElementById('showIcon2')

const hideCollectionBtn3 = document.getElementById('hideIcon3')
const showCollectionBtn3 = document.getElementById('showIcon3')

let collectionImages = document.querySelectorAll('.groupDiv')
let collectionImages2 = document.querySelectorAll('.groupDiv2')
let collectionImages3 = document.querySelectorAll('.groupDiv3')

hideCollectionBtn.addEventListener('click', hideImageCollection)
showCollectionBtn.addEventListener('click', showImageCollection)

function hideImageCollection() {
    showCollectionBtn.style.display = 'flex'
    hideCollectionBtn.style.display = 'none'
    for(let i = 0; i< collectionImages.length; i++){
       collectionImages[i].style.display = 'none' 
    }
}
function showImageCollection() {
    showCollectionBtn.style.display = 'none'
    hideCollectionBtn.style.display = 'flex'
    for(let i = 0; i< collectionImages.length; i++){
       collectionImages[i].style.display = 'flex' 
    }
}
// jersey 

hideCollectionBtn2.addEventListener('click', hideImageCollection2)
showCollectionBtn2.addEventListener('click', showImageCollection2)

function hideImageCollection2() {
    showCollectionBtn2.style.display = 'flex'
    hideCollectionBtn2.style.display = 'none'
    for(let i = 0; i< collectionImages2.length; i++){
       collectionImages2[i].style.display = 'none' 
    }
}
function showImageCollection2() {
    showCollectionBtn2.style.display = 'none'
    hideCollectionBtn2.style.display = 'flex'
    for(let i = 0; i< collectionImages2.length; i++){
       collectionImages2[i].style.display = 'flex' 
    }
}

// shirt 

hideCollectionBtn3.addEventListener('click', hideImageCollection3)
showCollectionBtn3.addEventListener('click', showImageCollection3)

function hideImageCollection3() {
    showCollectionBtn3.style.display = 'flex'
    hideCollectionBtn3.style.display = 'none'
    for(let i = 0; i< collectionImages3.length; i++){
       collectionImages3[i].style.display = 'none' 
    }
}
function showImageCollection3() {
    showCollectionBtn3.style.display = 'none'
    hideCollectionBtn3.style.display = 'flex'
    for(let i = 0; i< collectionImages3.length; i++){
       collectionImages3[i].style.display = 'flex' 
    }
}

let sneakersButton = document.querySelectorAll('#sneakersButton')

function goToSneakerPage() {
    for(let i =0; i < sneakersButton.length; i++){
    sneakersButton[i].addEventListener('click', ()=>{
    window.open('https://gubevuclothing.netlify.app/sneakers.html')
    })
    }
}

goToSneakerPage()

let shirtsButton = document.querySelectorAll('#shirtsButton')

function goToShirtPage() {
    for(let i =0; i < shirtsButton.length; i++){
    shirtsButton[i].addEventListener('click', ()=>{
    window.open('https://gubevuclothing.netlify.app/shirts.html')
    })
    }
}

goToShirtPage()

let jacketsButton = document.querySelectorAll('#jacketsButton')

function goToJacketPage() {
    for(let i =0; i < jacketsButton.length; i++){
    jacketsButton[i].addEventListener('click', ()=>{
    window.open('https://gubevuclothing.netlify.app/jackets.html')
    })
    }
}

goToJacketPage()

