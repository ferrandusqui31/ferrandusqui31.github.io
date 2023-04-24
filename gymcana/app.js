var btnInicio = document.getElementById('btnTitulo');
var imgf1 = document.getElementById('imgf1');
var txtVamos = document.getElementById('vamos');
var contenedor = document.getElementById('contenedor');


// Animación del inicio
function inicio(){
    imgf1.className = 'imgf1';
    window.setTimeout(()=>{
        txtVamos.className = 'vamos';

        window.setTimeout(()=>{
            contenedor.className = "escondido";
            txtVamos.className = "escondido";
            p1.className = "contenedor";
            p = 1;
        }, 2000)
    }, 9000);
}


btnInicio.addEventListener('click', inicio);