const landmarkCollection=[

    {
        name: "Cologne Cathedral",
        link: "https://en.wikipedia.org/wiki/Cologne_Cathedral"
    },


    {
        name: "Neuschwanstein Castle",
        link:"https://en.wikipedia.org/wiki/Neuschwanstein_Castle"
    },

    {
        name: "Brandenburg Gate",
        link: "https://en.wikipedia.org/wiki/Brandenburg_Gate"
    }

]

export const useLandmark = () => {
    return landmarkCollection.slice()
}