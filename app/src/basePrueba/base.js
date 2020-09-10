const database = {
    categories: [
        { id: 1, name: 'Latest' },
        { id: 2, name: 'Top' },
        { id: 3, name: 'Deportes' },
        { id: 4, name: 'Black' },
        { id: 5, name: 'Work' },
        { id: 6, name: 'Too dark to see' },
        { id: 7, name: 'Random' },

    ],
    memes: [
        {
            id: 1, author: 'pepe',
            title: 'Hola soy un meme',
            image: 'Soy una imagen',
            description: 'Soy descripcion',
            category: 1,
            positiveVotesCount: 234,
            negativeVotesCount: 100
        },
        {
            id: 2, author: 'pepe2',
            title: 'Hola soy un meme2',
            image: 'Soy una imagen',
            description: 'Soy descripcion',
            category: 3,
            positiveVotesCount: 234,
            negativeVotesCount: 100
        },
        {
            id: 3, author: 'pepe3',
            title: 'Hola soy un meme',
            image: 'Soy una imagen',
            description: 'Soy descripcion',
            category: 3,
            positiveVotesCount: 234,
            negativeVotesCount: 100
        }
    ]
}
export default database;
