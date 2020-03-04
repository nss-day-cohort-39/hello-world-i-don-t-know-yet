const LandmarkInfo = [
    {
        name: 'Tavarua',
        image: 'https://en.wikipedia.org/wiki/Tavarua'
    },
    {
        name: 'Navua River',
        image: 'https://en.wikipedia.org/wiki/Navua_River'
    },
    {
        name: 'Sri Siva Subramaniya temple',
        image: 'https://en.wikipedia.org/wiki/Sri_Siva_Subramaniya_temple'
    },
]
export const useLandmark = () => {
    return LandmarkInfo.slice()
}