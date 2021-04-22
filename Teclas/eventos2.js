var color = document.getElementById("selecionar_color");
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var estado;
var x ;
var y ;

cuadro.addEventListener("mousedown", pulsarMouse);
cuadro.addEventListener("mousemove", moverMouse);
cuadro.addEventListener("mouseup",levantarMouse);

function pulsarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento)
{
    if(estado == 1)
    {
        dibujarLinea(color.value, x , y , evento.layerX, evento.layerY);
    }else{
        x = evento.layerX;
        y = evento.layerY;
    }
}

function levantarMouse(evento)
{
    estado = 0;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    papel.beginPath();
    papel.lineWidth = 3;
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath;
}