function appendToDisplay(value){
    document.querySelector(".input").value += value;
}
function clearDisplay(){
    document.querySelector(".input").value = "";
}
function del(){
    document.querySelector(".input").value = document.querySelector(".input").value.slice(0,-1);
}
function calculate(){
    try{
        document.querySelector(".input").value = eval(document.querySelector(".input").value);
    }
    catch{
        document.querySelector(".input").value = "error";
    }
}