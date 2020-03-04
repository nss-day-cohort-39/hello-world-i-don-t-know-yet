import { useArrayOfCitiesObjects } from "./citiesDataProvider.js";
import city from "./city.js";

const citiesList = () => {
    const cityDOMLocation = document.querySelector(".cities__listItems");
    const arrayOfCityObjects = useArrayOfCitiesObjects();
    
    for (const location of arrayOfCityObjects) {
        cityDOMLocation.innerHTML += city(location);
    }
}

export default citiesList;