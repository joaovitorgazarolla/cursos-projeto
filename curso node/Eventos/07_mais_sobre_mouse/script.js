let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");



btn1.addEventListener("mousedown", function(){
    console.log("Apertou o Bot�o")
});

btn2.addEventListener("mouseup", function(){
    console.log("Soltou o Bot�o")
});

btn3.addEventListener("dblclick", function(){
    console.log("Clickou 2x")
});

