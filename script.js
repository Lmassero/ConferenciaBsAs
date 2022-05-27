
categoria = ["Estudiante", "Trainee", "Junior"];
porcentajeEstudiante = 80;
porcentajeTrainee= 50;
porcentajeJunior= 15;
const valorEntradas= 200;


function calcularTotalAPagar (){

    const cantidadEntradas= document.getElementById('cantidad').value;
    //genero una constante que me muestre (value) la cantidad de entradas que se selecciona
    const categoriaEstudiante= document.getElementById('categoria');
    const valorCategoria= categoriaEstudiante.options[categoriaEstudiante.selectedIndex].value;
    //genera una constante que me muestre dentro de todas las opciones (.options), cual selecciono (.selectedIndex)
    let total;
    //variable que almacena el total de la cuenta
    switch(valorCategoria){
        case categoria[0]: total= cantidadEntradas * (valorEntradas - (valorEntradas * porcentajeEstudiante / 100));
        //[0] selecciono la posicion del string
        break;
        case categoria[1]: total= cantidadEntradas * (valorEntradas - (valorEntradas * porcentajeTrainee / 100));
        break;
        case categoria[2]: total= cantidadEntradas * (valorEntradas - (valorEntradas * porcentajeJunior / 100));
        break;
        default: total = 0;
    }
    
    document.getElementById('totalAPagar').innerText = (" $" + total);
}
