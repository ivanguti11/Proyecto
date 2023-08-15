const nieves = [];

    function agregarNieve() {
        const selectElement = document.getElementById("sabores");
        const cantidadElement = document.getElementById("cantidad");
        const nievesSeleccionadasElement = document.getElementById("nievesSeleccionadas");

        const saborSeleccionado = selectElement.value;
        const cantidad = parseInt(cantidadElement.value);
        let precio = 0;
    switch (saborSeleccionado) {
        case "vainilla":
        precio = 20;
        break;
        case "chocolate":
        precio = 22;
        break;
        case "fresa":
        precio = 23;
        break;
        case "menta":
        precio = 25;
        break;
    }

      const total = precio * cantidad;
        nieves.push({ sabor: saborSeleccionado, cantidad: cantidad, total: total });
        const li = document.createElement("li");
        li.textContent = `${cantidad} x ${saborSeleccionado} - $${total.toFixed(2)}`;
        nievesSeleccionadasElement.appendChild(li);

        selectElement.value = "vainilla";
        cantidadElement.value = 1;
    }

    function calcularTotal() {
        const totalElement = document.getElementById("total");

        let totalAcumulado = 0;
        for (const nieve of nieves) {
        totalAcumulado += nieve.total;
    }

        totalElement.textContent = totalAcumulado.toFixed(2);
    }