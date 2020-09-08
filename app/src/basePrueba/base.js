const database = {
    categories: [
        { id: 1, name: 'Deportes' },
        { id: 2, name: 'Humor negro' },
        { id: 3, name: 'Trabajo' },
        { id: 4, name: 'Too dark to see' },
        { id: 5, name: 'Random' },
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
/* id*	integer($int64)
author*	integer($int64)
title*	string
image*	string
description	string
category*	integer($int64)
positiveVotesCount	integer($int64)

negativeVotesCount	integer($int64)
} */