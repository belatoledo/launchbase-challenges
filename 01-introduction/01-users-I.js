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

    for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} works with ${users[i].technologies.join(', ')}`)
    }


