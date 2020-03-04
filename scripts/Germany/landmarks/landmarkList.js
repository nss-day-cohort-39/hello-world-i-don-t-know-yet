import {useLandmark} from "./landmarkDataProvider.js"
import Landmarks from "./landmark.js"

const contentTarget = document.querySelector(".landmarks__listItem")

const landmarkList = () => {

    const landmarkarrayOfObjects = useLandmark()

    for (const landmarkObject of landmarkarrayOfObjects) {

        const germanyHTMLRepresentation = Landmarks(landmarkObject)
        contentTarget.innerHTML += germanyHTMLRepresentation
    }

}

export default landmarkList