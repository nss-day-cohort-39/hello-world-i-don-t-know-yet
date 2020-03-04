const arrayOfLandmarkObjects = [
    {
        name: "Mount Fuji",
        link: "https://en.wikipedia.org/wiki/Mount_Fuji",
    },
    {
        name: "Itsukushima Shrine",
        link: "https://en.wikipedia.org/wiki/Itsukushima_Shrine",
    },
    {
        name: "Himeji Castle",
        link: "https://en.wikipedia.org/wiki/Himeji_Castle",
    },
];

export const useArrayOfLandmarkObjects = () => {
    return arrayOfLandmarkObjects.slice();
}