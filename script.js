const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2')
const quantity = document.getElementById('quantity');
const total = document.getElementById('total');
const item = document.getElementById('item');

const amount1 = 399;
const amount2 = 209;




btn1.addEventListener('click', function handleclick() {
    quantity.innerHTML = '1';
    total.innerHTML = '399';
    item.innerText = 'Ashirwad Atta - Whole wheat 10 kg';
    
})

btn2.addEventListener('click', function handleclick2() {
    quantity.innerHTML = '1';
    total.innerHTML = '209';
    item.innerText = 'Ashirwad Atta - Whole wheat 5 kg';
})


function totalClick1(click) {
    const sumValue = parseInt(quantity.innerText) + click;
    quantity.innerText = sumValue;

    if(total.innerText % 399 != 0 ){
        const payValue = parseInt(total.innerText) + amount2;
        total.innerText = payValue
    }
    else{
        const payValue = parseInt(total.innerText) + amount1;
        total.innerText = payValue
    }
}

function totalClick2(click) {
    const sumValue = parseInt(quantity.innerText) + click;
    quantity.innerText = sumValue;

    if(total.innerText % 399 != 0){
        const payValue = parseInt(total.innerText) - amount2;
        total.innerText =payValue;
    }
    else{
        const payValue = parseInt(total.innerText) - amount1;
        total.innerText =payValue;
    }
}



    const button1 = document.querySelector('#btn1');
    
    button1.addEventListener('click', () => {
        button1.classList.add('active');
    });

    
    const button2 = document.querySelector('#btn2');
    
    button2.addEventListener('click', () => {
        button2.classList.add('active');
    });


// console.log('hello')