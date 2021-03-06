// User basket

let userBasket = {
    banana: 0,
    berries: 0,
    grapes: 0,
    watermelon: 0,
    };

// Declare these variables to update later with Object methods
let values;
let keys;

// Declare these variables to update later with .innerHTML
let bananaCount;

// Select buttons 
const basketButton = document.querySelectorAll(".basket-button button");
const basketPlus = document.querySelectorAll(".basket-plus");
const basketMinus = document.querySelectorAll(".basket-minus");
const basketFruitEmpty = document.querySelectorAll(".empty-fruit-button button");
const emptyEntireBasket = document.querySelector("#empty-basket");


// Select elements to update from let values

let bananaCounter = document.querySelectorAll(".fruit-counter");
let banCount = document.getElementById("ban-count0");
let berriesCount = document.getElementById("ban-count1");
let grapesCount = document.getElementById("ban-count2");
let watermelonCount = document.getElementById("ban-count3");
let totalBasketCount = document.getElementById("total-fruits");

// Function to run when event handler fires when add to basket buttons are clicked
function updateBasket(e) {
    let value = e.target.dataset.fruit;
    let value0 = e.target.dataset.fruit0;
    let value1 = e.target.dataset.fruit1;
    let value2 = e.target.dataset.fruit2;
    let value3 = e.target.dataset.fruit3;
    let checkDataSet = e.target.dataset.check;
    let emptyDataSet = e.target.dataset.empty;
    let basketEmpty = e.target.dataset.basketempty;
    
    if (checkDataSet) {
        userBasket[value]--;
    }  else if (emptyDataSet) {
        userBasket[value] = 0;
    } else if (basketEmpty) {
        userBasket[value0] = 0;
        userBasket[value1] = 0;
        userBasket[value2] = 0;
        userBasket[value3] = 0;
    } else if (!checkDataSet && !emptyDataSet && !basketEmpty) {
        userBasket[value]++;
    }

    values = Object.values(userBasket);
    keys = Object.keys(userBasket);

    console.log(userBasket);
    console.log(values);
    console.log(keys);
    
    const banCountVal = values[0];
    banCount.innerHTML = `
            <p>${banCountVal}</p>
            `;

    const berriesCountVal = values[1];
    berriesCount.innerHTML = `
                    <p>${berriesCountVal}</p>
                    `;
            
    const grapesCountVal = values[2];
    grapesCount.innerHTML = `
                    <p>${grapesCountVal}</p>
                    `;
                    
    const watermelonCountVal = values[3];
    watermelonCount.innerHTML = `
                    <p>${watermelonCountVal}</p>
                    `;

    function tallyValues (tally, currentTotal) {
        console.log(`the current tally is ${tally}`);
        console.log(`the current total is ${currentTotal}`);
        console.log('----------');
        return tally + currentTotal;
    }
        
    const basketTotal = values.reduce(tallyValues, 0);

    totalBasketCount.innerHTML = `
    <p>Total Fruits: ${basketTotal}</p>
    `;

    

    
    // for (let index = 0; index < values.length; index++) {
    //     const element = values[index];
        
    //     console.log(element);
        
    //     bananaCount = `
    //     <p>${element}</p>
    //     `; 

    //     console.log(bananaCount);
        
       
    // }
    

    return userBasket;
    
    
}

// Function to add event listener to add to basket buttons on fruit cards 
function addEventListenerBasket(button) {
    button.addEventListener('click', updateBasket)
}

// Add event listener on basket buttons 
basketButton.forEach(addEventListenerBasket);
basketPlus.forEach(addEventListenerBasket);
basketMinus.forEach(addEventListenerBasket);
basketFruitEmpty.forEach(addEventListenerBasket);

// Add event listener on empty basket button and call updateBasket function
emptyEntireBasket.addEventListener('click', updateBasket);


// Inject inner html into fruit counters 


// bananaCount = `
// <p></p>
// `; 

// bananaCounter.innerHTML = bananaCount;


