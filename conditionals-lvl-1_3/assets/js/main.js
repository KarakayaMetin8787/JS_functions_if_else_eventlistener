function greaterThan(){
    event.preventDefault();
    const personAge = document.body.querySelector("form input:nth-of-type(1)");
    const pTag = document.body.querySelector("p");
    if (personAge.value >= 18){
        pTag.textContent = "Ja, Du kannst Shisha rauchen";
    } else {
        pTag.textContent = "Du darfst noch nicht Shisha rauchen"
    }
}
