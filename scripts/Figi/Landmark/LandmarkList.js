import { useLandmark } from "./LandmarkDataProvider.js";
import Landmark from './Landmark.js'

const TargetContent = document.querySelector('.landmark-ifo')
const landmarkList = () => {
    const landmarks = useLandmark()
    for (const landmarkObject of landmarks) {
        const htmlRepresentation = Landmark(landmarkObject)
        TargetContent.innerHTML += htmlRepresentation
    }
}

export default landmarkList