const developers = [
    {
        name: 'Ana',
        age: 22,
        technologies: [
            {
                tech: 'C++',
                expertise: 'Desktop'
            }
        ]
    },

    {
        name: 'Charles',
        age: 30,
        technologies: [
            {
                tech: 'Python',
                expertise: 'Data Science'
            }
        ]
    },

    {
        name: 'Henry',
        age: 27,
        technologies: [
            {
                tech: 'JavaScript',
                expertise: 'Web/Mobile'
            }
        ]
    }
]

console.log(`User ${developers[0].name} is ${developers[0].age} years old and uses ${developers[0].technologies[0].tech} technology with expertise in ${developers[0].technologies[0].expertise}.`)