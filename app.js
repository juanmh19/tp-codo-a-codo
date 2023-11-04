function precios() {
    precio.innerHTML = `Total a Pagar: ` + (cantidad.value *200 - cantidad.value * 200 * parseFloat(categoria.value) + "$")  
}

categoria.addEventListener("change", precios)
cantidad.addEventListener("change", precios);
precios()