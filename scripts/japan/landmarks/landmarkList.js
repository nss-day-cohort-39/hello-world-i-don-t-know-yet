import { useArrayOfLandmarkObjects } from "./landmarkDataProvider.js";
import landmark from "./landmark.js";

const landmarkList = () => {
    const landmarkDOMLocation = document.querySelector(".landmarks__listItems");
    const arrayofLandmarkObjects = useArrayOfLandmarkObjects();

    for (const location of arrayofLandmarkObjects) {
        landmarkDOMLocation.innerHTML += landmark(location);        
    }
}

export default landmarkList;