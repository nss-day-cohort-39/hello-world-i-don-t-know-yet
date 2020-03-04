const arrayOfGovernmentObjects = [
    {
        name: "Oda Nobunaga",
        link: "https://en.wikipedia.org/wiki/Oda_Nobunaga",
    },
    {
        name: "Emperor Meiji",
        link: "https://en.wikipedia.org/wiki/Emperor_Meiji",
    },
    {
        name: "Hirohito",
        link: "https://en.wikipedia.org/wiki/Hirohito",
    },
]

export const useArrayOfGovernmentObjects = () => {
    return arrayOfGovernmentObjects.slice();
}