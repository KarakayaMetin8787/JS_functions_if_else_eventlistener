const value = document.body.querySelector("#value");
const input = document.body.querySelector("#regler");

value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });

function checkAirQuality(){
    const body = document.body;
    const pTagOne = document.body.querySelector("main p:nth-of-type(1)");
    const pTagTwo = document.body.querySelector("main p:nth-of-type(2)");
    const inputValue = Number(input.value);
    
    if (inputValue <= 50){
        pTagOne.textContent = "Level of health concern: Good";
        pTagTwo.textContent = "Level of health effect: Little or no risk";
        body.style.backgroundColor = "green";
    } else if (inputValue > 50 && inputValue <= 100){
        pTagOne.textContent = "Level of health concern: Moderate";
        pTagTwo.textContent = "Level of health effect: Acceptable quality";
        body.style.backgroundColor = "yellow";
    } else {
        pTagOne.textContent = "Level of health concern: Unhealthy for sensitive groups";
        pTagTwo.textContent = "Level of health effect: Generable publics not likely affected";
        body.style.backgroundColor = "orange";
    }
}

input.addEventListener("input", checkAirQuality);