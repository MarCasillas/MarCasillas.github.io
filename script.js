//Mandar informacion del formulario a los resultados
document.getElementById('formularioGastos').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los inputs
    const nomina1 = parseFloat(document.getElementById('nomina1').value) || 0;
    const nomina2 = parseFloat(document.getElementById('nomina2').value) || 0;
    const comida = parseFloat(document.getElementById('comida').value) || 0;
    const transporte = parseFloat(document.getElementById('transporte').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const luz = parseFloat(document.getElementById('luz').value) || 0;
    const internet = parseFloat(document.getElementById('internet').value) || 0;
    const renta = parseFloat(document.getElementById('renta').value) || 0;
    const gastos = parseFloat(document.getElementById('gastos').value) || 0;

    // Validar que todos los valores sean positivos
    if (nomina1 < 0 || nomina2 < 0 || comida < 0 || transporte < 0 || gas < 0 || luz < 0 || internet < 0 || renta < 0 || gastos < 0) {
        alert('Los valores no pueden ser negativos.');
        return; // Detener la ejecución si hay valores negativos
    }

    // Calcular el total de gastos
    const totalGastos = comida + transporte + gas + luz + internet + renta + gastos;

    // Calcular el dinero restante sumando las nóminas y restando los gastos
    const totalNomina = nomina1 + nomina2;
    const dineroRestante = totalNomina - totalGastos;

    if(dineroRestante<0){
        document.getElementById('alerta').textContent = "¡Ajusta tus gastos, te falta dinero!";
    }else{
        document.getElementById('alerta').textContent = "";
    }

    // Mostrar el resultado
    document.getElementById('totalNominas').textContent = totalNomina.toFixed(2);
    document.getElementById('dineroRestante').textContent = dineroRestante.toFixed(2);
    document.getElementById('dineroGastado').textContent = totalGastos.toFixed(2); 
});

// Limpiar campos al hacer clic en el botón "Limpiar Campos"
document.getElementById('limpiarCampos').addEventListener('click', function() {
    const inputs = document.querySelectorAll('#formularioGastos input[type="number"]');
    inputs.forEach(input => input.value = '');
    
    //También limpio los resultados calculados
    document.getElementById('totalNominas').textContent = "0.00";
    document.getElementById('dineroRestante').textContent = "0.00";
    document.getElementById('dineroGastado').textContent = "0.00";
    document.getElementById('alerta').textContent = "";
});

