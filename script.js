const counterValue = document.querySelector('#counter');

const decrement = () => {
    // get value fron ui
    let value = parseInt(counterValue.innerText);
    // update value
    value = value - 1;
    // set value to ui
    counterValue.innerText = value;
}

const increment = () => {
    let value = parseInt(counterValue.innerText);
    value = value + 1;
    counterValue.innerText = value;
}