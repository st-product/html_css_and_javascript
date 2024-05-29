// Closure

function outer(){
    message = "Hello World.";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());

function creatGame(){
    let score = 0;

    function increaseScore(points){
        score+=points
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score-=points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const points = creatGame();

points.increaseScore(5);
points.increaseScore(7);
points.decreaseScore(20);
console.log(points.getScore());