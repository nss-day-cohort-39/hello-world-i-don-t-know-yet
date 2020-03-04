const arrayOfCitiesObjects = [
    {
     name: "Tokyo",
     link: "https://en.wikipedia.org/wiki/Tokyo",
    },
    {
     name: "Yokohama",
     link: "https://en.wikipedia.org/wiki/Yokohama",
    },
    {
     name: "Kyoto",
     link: "https://en.wikipedia.org/wiki/Kyoto",
    },
]

export const useArrayOfCitiesObjects = () => {
    return arrayOfCitiesObjects.slice();
}