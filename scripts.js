const meter = document.getElementById('meter');
meter.innerHTML = window.innerWidth;
const singles = [...document.querySelectorAll('.container > div')];
const page = document.querySelector('body');

/* window.addEventListener('resize', ()=>{
    console.log(window.outerWidth);
    meter.innerHTML = window.innerWidth;
}); */


const logMyWidth = ()=>{
    /* console.log(`Outer width is ${window.outerWidth}
Inner width is ${window.innerWidth}`); */

    meter.innerHTML = window.innerWidth;
    if(window.innerWidth < 760 ){
        page.style.setProperty("--bgcolor", '#ff9900');
    }else {
        page.style.setProperty("--bgcolor", "#ccaacc")
    }
    [...document.querySelectorAll('.container > div')].map( (el) => {
        el.innerHTML = `<p>${el.clientWidth} x ${el.clientHeight}</p>`;
        return el.clientWidth;
    });
    
}

const logSome = () => {

    console.log('me');
}

window.onresize = logMyWidth;
const atts = singles.map( (el) => {
    el.innerHTML = `<p>${el.clientWidth}</p>`;
});
