function weather(){
    const eingabe = document.body.querySelector("main input");
    const pTag = document.body.querySelector("main p");
    if (Number(eingabe.value) >= 8){
        pTag.textContent = "Wetter ist super";
    } else if (Number(eingabe.value) === 6 || Number(eingabe.value) === 7){
        pTag.textContent = "Wetter ist gut";
    } else if (Number(eingabe.value) === 3 || Number(eingabe.value) === 4 || Number(eingabe.value) === 5){
        pTag.textContent = "Wetter ist okay";
    } else {
        pTag.textContent = "Wetter ist schlecht";
    } 
}