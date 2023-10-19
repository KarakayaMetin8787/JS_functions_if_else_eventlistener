function diff(zahl){
    const ergebnis = 27 - zahl;
    
    if (zahl > 27){
        const ergebnisNeu = ergebnis * 2
        console.log(ergebnisNeu);
    } else {
        console.log(ergebnis);
    }
}

diff(35);
diff(74);
diff(123);