var p = 0;

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');
var p10 = document.getElementById('p10');
var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var foto = document.getElementById('fotoFinal');


// Preguntas
function siguiente(){
    switch (p){
        case 1:
            p1.className = 'escondido';
            p2.className = 'contenedor';
            p++
            break;
        case 2:
            p2.className = 'escondido';
            p3.className = 'contenedor';
            p++
            break;
        case 3:
            p3.className = 'escondido';
            p4.className = 'contenedor';
            p++
            break;
        case 4:
            p4.className = 'escondido';
            p5.className = 'contenedor';
            p++
            break;
        case 5:
            p5.className = 'escondido';
            p6.className = 'contenedor';
            p++
            break;
        case 6:
            p6.className = 'escondido';
            p7.className = 'contenedor';
            p++
            break;
        case 7:
            p7.className = 'escondido';
            p8.className = 'contenedor';
            p++
            break;
        case 8:
            p8.className = 'escondido';
            p9.className = 'contenedor';
            p++
            break;
        case 9:
            p9.className = 'escondido';
            p10.className = 'contenedor';
            p++
            break;
        case 10:
            p10.className = 'escondido';
            p11.className = 'contenedor';
            p++
            break;
        case 11:
            p11.className = 'escondido';
            p12.className = 'contenedor';
            p++
            break;
        case 12:
            p12.className = 'escondido';
            foto.className = 'fotoFinal';
            break;
    }
}

function fp1(n){
    switch (n) {
        case 1:
            alert('¡Respuesta correcta!');
            siguiente();
            break;
        case 2:
            alert('No me esperaba eso de ti. Prueba otra vez');
            break;
        case 3:
            alert('¿¿Cómo has fallado?? Me decepcionas.');
            break;
    }
}

function fp2(n){
    switch (n) {
        case 1:
            alert('Literalmente este año no hay GP de Francia');
            break;
        case 2:
            alert('Sobretodo Mónaco con rectas');
            break;
        case 3:
            alert('Olee. Siguiente pregunta...');
            siguiente();
            break;
    }
}

function fp3(n){
    switch (n) {
        case 1:
            alert('Ojalá');
            break;
        case 2:
            alert('Leclerc por el día...');
            siguiente();
            break;
        case 3:
            alert('...Batman por la noche');
            siguiente();
            break;
    }
}

function fp4(n){
    switch (n) {
        case 1:
            alert('El mejor piloto después de Mazepin');
            siguiente();
            break;
        case 2:
            alert('No hace caso a las ordenes de equipo');
            break;
        case 3:
            alert('Me parece lamentable que estés desprestigiando el trabajo de los ingenieros de Aston Martin con estas declaraciones. Otra más y te quedas sin gymcana');
            break;
    }
}

function fp5(n){
    switch (n) {
        case 1:
            alert('No no no');
            break;
        case 2:
            alert('No no no');
            break;
        case 3:
            alert('El mas grande de todos');
            siguiente();
            break;
    }
}

function fp6(n){
    switch (n) {
        case 1:
            alert('Te quedas sin gymcana');
            break;
        case 2:
            alert('Así me gusta. La mierda al vertedero');
            siguiente();
            break;
    }
}

function fp7(n){
    switch (n) {
        case 1:
            alert('Como debe ser, apoyando a los compañeros de equipo');
            siguiente();
            break;
        case 2:
            alert('Esto es como que te den pan y muerdas el dedo');
            break;
    }
}

function fp8(n){
    switch (n) {
        case 1:
            alert('Te entiendo pero respuesta incorrecta');
            break;
        case 2:
            alert("S'ha enganchao");
            siguiente();
            break;
    }
}

function fp9(n){
    switch (n) {
        case 1:
            alert('¿Víctor? ¿Eres tú?');
            siguiente();
            break;
        case 2:
            alert('El Nano es una bala azul que sin cañón\nDispara en un circuito directo al corazón\nEl Nano no es humano, el Nano es inmortal\nY sale en las revistas junto a Hulk y a Supermam');
            siguiente();
            break;
        case 3:
            alert('Cierra ya el formulario y vete a tu cuarto a jugar al maincra');
            break;
    }
}

function fp10(n){
    switch (n) {
        case 1:
            alert('¿Acaso te crees que Mazepin era mal piloto?');
            break;
        case 2:
            alert('Porque le robaron unas 20 más');
            siguiente();
            break;
        case 3:
            alert('Normal, si le echan del equipo');
            break;
    }
}

function fp11(n){
    switch (n) {
        case 1:
            alert('Despiértate. Son pasadas las 11 de la mañana y sigues soñando.');
            break;
        case 2:
            alert('Y bien que se llevó la pole');
            siguiente();
            break;
        case 3:
            alert('Tan buen estratega en marketing como en la pista.');
            siguiente();
            break;
    }
}

function fp12(){
    alert('¡Enorabuena, te has pasado la gymcana. Ahora puedes recoger tu recompensa.');
    siguiente();
}