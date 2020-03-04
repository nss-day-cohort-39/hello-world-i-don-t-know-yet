const GovernmentInfo = [
    {
        name: 'Hercules Robinson, 1st Baron Rosmead',
        image: 'https://en.wikipedia.org/wiki/Hercules_Robinson,_1st_Baron_Rosmead'
    },
    {
        name: 'Frank Bainimarama',
        image: 'https://en.wikipedia.org/wiki/Frank_Bainimarama'
    },
    {
        name: 'Jioji Konrote',
        image: 'https://en.wikipedia.org/wiki/Jioji_Konrote'
    },
]
export const useGovernment = () => {
    return GovernmentInfo.slice()
}