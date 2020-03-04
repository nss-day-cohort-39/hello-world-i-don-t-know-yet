
import { useGovernment } from "./governmentDataProvider.js";
import Government from "./government.js";

const contentTarget = document.querySelector(".government__listItem")

const GovernmentList = () => {
    // Get the data from the provider
    const governmentObjectsArray = useGovernment()

    // Iterate the array
    for (const governmentObject of governmentObjectsArray) {
        // Convert each object to HTML representation
        const germanyHTMLRepresentation = Government(governmentObject)

        // Put HTML in DOM
        contentTarget.innerHTML += germanyHTMLRepresentation

    }

}

export default GovernmentList