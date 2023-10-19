function adult(){
    const personAge = document.body.querySelector("form input:nth-of-type(1)");
    const pTag = document.body.querySelector("p");
    if (personAge.value >= 18){
        pTag.textContent = "Volljährig";
    } else {
        pTag.textContent = "Minderjährig"
    }
}
