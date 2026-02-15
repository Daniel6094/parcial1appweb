
        const btnAdd = document.getElementById('btnAdd');
        const tablaCuerpo = document.getElementById('tablaCuerpo');
        
        let acumuladoSubtotal = 0;
        const TASA_IVA = 0.13;

        btnAdd.addEventListener('click', () => {
            // 1. Capturar valores
            const nombre = document.getElementById('producto').value;
            const precio = parseFloat(document.getElementById('precio').value);
            const cantidad = parseInt(document.getElementById('cantidad').value);

            // Validación básica
            if (isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0) {
                alert("Por favor, ingrese valores válidos");
                return;
            }

            // 2. Calcular subtotal de fila
            const subtotalFila = precio * cantidad;

            // 3. Crear y agregar fila a la tabla
            const fila = `
                <tr>
                    <td>${nombre}</td>
                    <td>$${precio.toFixed(2)}</td>
                    <td>${cantidad}</td>
                    <td>$${subtotalFila.toFixed(2)}</td>
                </tr>
            `;
            tablaCuerpo.innerHTML += fila;

            // 4. Actualizar totales generales
            acumuladoSubtotal += subtotalFila;
            const iva = acumuladoSubtotal * TASA_IVA;
            const total = acumuladoSubtotal + iva;

            document.getElementById('res-subtotal').innerText = `$${acumuladoSubtotal.toFixed(2)}`;
            document.getElementById('res-iva').innerText = `$${iva.toFixed(2)}`;
            document.getElementById('res-total').innerText = `$${total.toFixed(2)}`;

            // 5. Limpiar inputs
            document.getElementById('precio').value = '';
            document.getElementById('cantidad').value = '1';
        });
  