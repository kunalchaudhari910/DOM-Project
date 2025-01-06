const btn = document.getElementById("button");

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)]; //math.random() - generate random color between 0-0.99
                                                           // math.floor() - removes values after flooting point
    }
    return cons
}

// console.log(randomColor());


const changeRandomColor = () => {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeRandomColor);