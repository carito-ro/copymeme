const database = {
    categories: [
        { id: 1, name: 'Latest' },
        { id: 2, name: 'Top' },
        { id: 3, name: 'Deportes' },
        { id: 4, name: 'Black' },
        { id: 5, name: 'Work' },
        { id: 6, name: 'Too dark to see' },
        { id: 7, name: 'Random' },
        { id: 8, name: 'Politics' },
    ],
    memes: [
        {
            id: 1, author: 'pepe',
            title: 'Meme fernandez',
            url: 'https://www.merca2.es/wp-content/uploads/2020/04/Coronavirus-3.jpg',
            description: 'Soy descripcion',
            category: 8,
            positiveVotesCount: 3,
            negativeVotesCount: 7
        },
        {
            id: 2, author: 'pepe2',
            title: 'Hola soy un meme2',
            url: 'https://www.merca2.es/wp-content/uploads/2020/04/Coronavirus-3.jpg',
            description: 'Soy descripcion',
            category: 2,
            positiveVotesCount: 234,
            negativeVotesCount: 100
        },
        {
            id: 3, author: 'pepe3',
            title: 'Hola soy un meme',
            url: 'https://www.merca2.es/wp-content/uploads/2020/04/Coronavirus-3.jpg',
            description: 'Soy descripcion',
            category: 8,
            positiveVotesCount: 234,
            negativeVotesCount: 100
        },
        {
            id: 4, author: 'pepe3',
            title: 'Hola soy un meme',
            url: 'https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2020/04/09104747/memes-1024x628.jpg',
            description: 'Soy descripcion',
            category: 8,
            positiveVotesCount: 3433,
            negativeVotesCount: 100
        }
    ]
}
export default database;
