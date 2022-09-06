var screen=document.getElementById("screen");

function button_click(value){
    screen.value =screen.value +value;


}

function clear_screen(){
    screen.value="";
}
function t_sum(){
    var result =eval(screen.value);
    screen.value=result;
}