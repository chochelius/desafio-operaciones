console.log("habilitado!")
let num1 = parseInt(prompt("Ingrese primer numero mayor a cero"))
let num2 = parseInt(prompt("Ingrese segundo numero mayor a cero"))
let suma = num1 + num2
let resta = num1 - num2
let multip = num1 * num2
let divi = num1 / num2
let modudo = num1 % num2

document.write(`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Operación</th>
      <th scope="col">Primer número</th>
      <th scope="col">Segundo número</th>
      <th scope="col">Resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Suma</th>
      <td>${num1}</td>
      <td>${num2}</td>
      <td>${suma}</td>
    </tr>
    <tr>
    <th scope="row">Resta</th>
    <td>${num1}</td>
    <td>${num2}</td>
    <td>${resta}</td>
    </tr>
    <tr>
    <th scope="row">Multiplicación</th>
    <td>${num1}</td>
    <td>${num2}</td>
    <td>${multip}</td>
    </tr>
    <tr>
    <th scope="row">Divisón</th>
    <td>${num1}</td>
    <td>${num2}</td>
    <td>${divi}</td>
    </tr>
    <tr>
    <th scope="row">Módulo</th>
    <td>${num1}</td>
    <td>${num2}</td>
    <td>${modudo}</td>
    </tr>
  </tbody>
</table>`
)