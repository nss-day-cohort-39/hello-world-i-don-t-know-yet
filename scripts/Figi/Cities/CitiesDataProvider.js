const CitiesInfo = [
    {
       image: 'https://en.wikipedia.org/wiki/Suva',
       name: 'Suva'
    },
    {
        image: 'https://en.wikipedia.org/wiki/Lautoka',
        name: 'Lautoka'
     },
     {
        image: 'https://en.wikipedia.org/wiki/Nadi',
        name: 'Nadi'
     },

]
export const useCities = () =>{
    return CitiesInfo.slice()
}