// Your code goes here
console.log('test test test')
// mouseover: 	A pointing device is moved onto the element that has the listener attached or onto one of its children.
const logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading);

let color = 0;

function textColorChange(event) {
    event.target.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (color.length < 7) color += "0";
}

logoHeading.addEventListener('mouseover',textColorChange);

//mouseup

const headerNav = document.querySelector('.nav');

headerNav.addEventListener("mouseup", function( event ) {   
    event.target.style.color = "purple";
})

// keydown: ANY key is pressed

document.addEventListener('keydown', function(eventObj) {
    if (eventObj.key === 'Escape') {
        logoHeading.style.color = 'black'
    }
})

//keyup
document.addEventListener('keyup', function(eventObj) {
    if (eventObj.key === 'a') {
        logoHeading.style.color = 'green'
    }
})

// The dblclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.
//dblclick fires after two click events (and by extension, after two pairs of mousedown and mouseup events).

const allImage = document.querySelectorAll('img');
console.log(allImage);

allImage.forEach(function(item){
    item.addEventListener('dblclick', myFunc)
    function myFunc(){
        item.style.border = '2px solid black'
    }
})

// allImage[1].addEventListener('dblclick',() => {
//     allImage[1].toggle = 'extra large'
// })
// console.log(allImage[2])
// allImage[2].addEventListener('dblclick',() => {
//     allImage[2].style.filter = 'grayscale(100%)'
// })

// wheel: A wheel button of a pointing device is rotated in any direction.

const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(item){
    item.addEventListener('wheel', myFunction)
    function myFunction(){
        this.style.fontSize = '25px'
        this.style.color = 'pink'
    }
})


//contextmenu
console.log(buttons[1])
buttons[1].addEventListener('contextmenu', e => {
    e.preventDefault();
  });
//click
const firstButton = document.querySelector('.btn')
console.log(firstButton)

firstButton.addEventListener('click',function() {
        console.log('I am working!')
    }
)

firstButton.addEventListener('click' , () => {
    firstButton.textContent = 'YAY!!!!!'
})

//scroll

const body = document.querySelector('body')
console.log(body)

function backgroundColor() {
    body.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
        if (color.length < 7) color += "0";
}

document.addEventListener('scroll', () => backgroundColor());

//load
const pageHeaderLoad = document.querySelector('header');
window.addEventListener('load', () => {
    pageHeaderLoad.style.backgroundColor = 'pink';
});

