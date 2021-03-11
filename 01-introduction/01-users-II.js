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

function checkIfUserUsesCSS (user) {
    for (const tech of user.technologies) {
        if (tech == 'CSS') {
            return true
        }
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const useCSS = checkIfUserUsesCSS(users[i]);
  
    if (useCSS) {
      console.log(`O usuário ${users[i].name} trabalha com CSS`);
    }
  } 
