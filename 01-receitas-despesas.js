const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  function calculaSaldo(receitas, despesas) {
      let resultado = somaNumeros(receitas) - somaNumeros(despesas)

      return resultado
  }

  function somaNumeros(numeros) {
    let soma = 0

    for(i = 0; i < numeros.length; i++) {  
      soma = soma + numeros[i]
    }
    return soma
  }

  for (let usuario of usuarios) {
    let saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo >= 0) {
        console.log(`${usuario.nome} tem um saldo positivo de R$${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} tem um saldo negativo de R$${saldo.toFixed(2)}`)
    }
}