// Program counter

let count = 0;

document.getElementById("myH1").textContent = count;

document.getElementById("myButton1").onclick = function(){
    count++;
    document.getElementById("myH1").textContent = count;
}

document.getElementById("myButton3").onclick = function(){
    count--;
    document.getElementById("myH1").textContent = count;
}

document.getElementById("myButton2").onclick = function(){
    count = 0;
    document.getElementById("myH1").textContent = count;
}

/* document.getElementById("myH1").textContent = String(count);

document.getElementById("myButton1").onclick = function(){
    count = Number(count);
    count++;
    document.getElementById("myH1").textContent = String(count);
}

document.getElementById("myButton3").onclick = function(){
    count = Number(count);
    count--;
    document.getElementById("myH1").textContent = String(count);
}

document.getElementById("myButton2").onclick = function(){
    count = Number(count);
    count = 0;
    document.getElementById("myH1").textContent = String(count);
} */