
import { useCities } from "./citiesDataProvider.js";
import Cities from "./cities.js";

const contentTarget = document.querySelector(".cities__listItem")

const CitiesList = () => {
    // Get the data from the provider
    const citiesObjectsArray = useCities()

    // Iterate the array
    for (const citiesObject of citiesObjectsArray) {
        // Convert each object to HTML representation
        const germanyHTMLRepresentation = Cities(citiesObject)

        // Put HTML in DOM
        contentTarget.innerHTML += germanyHTMLRepresentation

    }

}

export default CitiesList