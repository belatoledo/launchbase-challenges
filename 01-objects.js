//construcao e impressao de um objeto que armazena nome, cor, foco e endereço

const empresas = [
    {
    name: 'Rocketseat',
    color: 'Purple',
    focus: 'Education',
    adress: 'Rua Guilherme Gembala, n. 260, Rio do Sul/SC'
    }
]

console.log(`A empresa ${empresas[0].name} está localizada na ${empresas[0].adress}`)