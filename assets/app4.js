console.log("habilitado!")
let num1 = parseInt(prompt("Ingrese un primer número"))
let num2 = parseInt(prompt("Ingrese un segundo número"))
let num3 = parseInt(prompt("Ingrese un tercer número"))
let num4 = parseInt(prompt("Ingrese un cuarto número"))
let num5 = parseInt(prompt("Ingrese un quinto número"))
let suma = num1 + num2 + num3 + num4 + num5
let prome = suma / 5

document.write(`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Suma</th>
      <th scope="col">Promedio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${suma}</td>
      <td>${prome}</td>
    </tr>
  </tbody>
</table>`
)
