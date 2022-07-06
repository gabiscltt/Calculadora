function add(x)
{
    var b = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = b + x;
}
function limpar()
{
    document.getElementById('display').innerHTML = "";
}
function calcular()
{
    var display = document.getElementById('display').innerHTML;
    if(display){
        document.getElementById('display').innerHTML = eval(display);
    }
    else{
        document.getElementById('display').innerHTML = 'Indefinido'
    }
