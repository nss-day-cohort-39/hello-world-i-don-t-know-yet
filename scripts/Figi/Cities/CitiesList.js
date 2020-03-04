import { useCities } from "./CitiesDataProvider.js";
import Cities from "./Cities.js";

const targetContent = document.querySelector('.coutries-list')
const CitiesList = () => {
    const citiesInfo = useCities()
    for (const citiesObject of citiesInfo) {
        const htmlRepresentation = Cities(citiesObject)
        targetContent.innerHTML += htmlRepresentation
    }
}
export default CitiesList