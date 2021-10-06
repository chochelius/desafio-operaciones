console.log("habilitado!")
let num1 = parseInt(prompt("Ingrese la cantidad de días"))
let anio = Math.floor(num1 / 365)
let meses = Math.floor((num1 % 365) / 7 )
let dias = Math.floor((num1 % 365) % 7)

document.write(`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Años</th>
      <th scope="col">Meses</th>
      <th scope="col">Dias</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${anio}</td>
      <td>${meses}</td>
      <td>${dias}</td>
    </tr>
  </tbody>
</table>`
)