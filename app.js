let result = document.getElementById('result');
let num = 0; 
document.getElementById('increase').onclick = function () {
    num = num + 1
    result.textContent = num

}
document.getElementById('decrease').onclick = function (){
    num = num - 1
    result.textContent = num
}
document.getElementById('reset').onclick = function (){
    num = 0
    result.textContent = num
}