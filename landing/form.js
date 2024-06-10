let male = document.querySelector(".male");
let female = document.querySelector(".female");

male.addEventListener('click', () => {
    if (male.classList.contains('selected')) {
        male.classList.remove("selected");
        female.classList.add("selected");
    } else {
        male.classList.add("selected");
        female.classList.remove("selected");
    }
});

female.addEventListener('click', () => {
    if (female.classList.contains('selected')) {
        female.classList.remove("selected");
        male.classList.add("selected");
    } else {
        female.classList.add("selected");
        male.classList.remove("selected");
    }
});
