function pointJohn(height, age) {
    const points = age * 5 + height;
    return points;
}

function pointMeike(height, age) {
    const points = age * 5 + height;
    return points;
}

const johnPoints = pointJohn(170, 22);
const meikePoints = pointMeike(168, 34);

if (johnPoints > meikePoints) {
    console.log("John gewinnt mit " + johnPoints + " Punkten.");
} else if (johnPoints < meikePoints) {
    console.log("Meike gewinnt mit " + meikePoints + " Punkten.");
} else {
    console.log("Es ist ein Gleichstand mit " + johnPoints + " Punkten.");
}
