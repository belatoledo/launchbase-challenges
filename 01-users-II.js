const users = [
    {
        name: 'Carlos',
        technologies: ['HTML', 'CSS']
    },
    {
        name: 'Jasmine',
        technologies: ['JavaScript', 'CSS']
    },
    {
        name: 'Tuane',
        technologies: ['HTML', 'Node.js']
    }
]

//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
//Essa função deve retornar um boolean true/false.

function checkIfUserUsesCSS (user) {
    for (const tech of user.technologies) {
        if (tech == 'CSS') {
            return true
        }
    }
    return false
}

// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
// SE encontrar, retorne true da função, caso contrário retorne false

for (let i = 0; i < users.length; i++) {
    const useCSS = checkIfUserUsesCSS(users[i]);
  
    if (useCSS) {
      console.log(`O usuário ${users[i].name} trabalha com CSS`);
    }
  } 
