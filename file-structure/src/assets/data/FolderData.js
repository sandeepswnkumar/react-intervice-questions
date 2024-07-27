const explorer = {
    id: crypto.randomUUID(),
    name: "root",
    isFolder: true,
    items: [
        {
            id: crypto.randomUUID(),
            name: "root",
            isFolder: true,
            items: []
        },
        {
            id: crypto.randomUUID(),
            name: "root",
            isFolder: true,
            items: []
        },
        {
            id: crypto.randomUUID(),
            name: "root",
            isFolder: true,
            items: []
        },
        {
            id: crypto.randomUUID(),
            name: "root",
            isFolder: true,
            items: []
        },
        {
            id: crypto.randomUUID(),
            name: "root",
            isFolder: false,
            items: []
        }
    ]
}


export default explorer;