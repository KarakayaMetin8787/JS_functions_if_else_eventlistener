function summieren(zahlEins, zahlZwei){
    const summe = zahlEins + zahlZwei;

    if (zahlEins === zahlZwei){
        console.log(summe * 5);
    } else {
        console.log(summe);
    }
}

summieren(2, 5);