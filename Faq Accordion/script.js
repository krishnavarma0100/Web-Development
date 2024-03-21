const btn_plus=document.querySelectorAll(".q h2 > span:last-child button:first-child");
const btn_minus=document.querySelectorAll(".q h2 > span:last-child button:last-child");
const paras=document.querySelectorAll(".q > p");
const heads=document.querySelectorAll(".q h2");

const show_hide = (index) => {
    paras[index].classList.toggle('hide');
    btn_minus[index].classList.toggle('hide');
    btn_plus[index].classList.toggle('hide')
}

heads[0].addEventListener("click", () => {
    show_hide(0);
})

heads[1].addEventListener("click", () => {
    show_hide(1);
})

heads[2].addEventListener("click", () => {
    show_hide(2);
})

heads[3].addEventListener("click", () => {
    show_hide(3);
})


