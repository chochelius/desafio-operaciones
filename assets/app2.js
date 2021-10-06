console.log("habilitado!")
let num1 = parseInt(prompt("Ingrese temperatura en °C para transformar a °F y °K"))
let kelv = num1 + 273.15
let faren = (num1 * 9/5) + 32

document.write(`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Temperatura en °C</th>
      <th scope="col">Temperatura en °K</th>
      <th scope="col">Temperatura en °F</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${num1}</td>
      <td>${kelv}</td>
      <td>${faren}</td>
    </tr>
  </tbody>
</table>`
)