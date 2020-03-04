import { useGovernment } from "./GovernmentDataProvider.js";
import Government  from './Government.js'


const TargetContent = document.querySelector('.country-leaders-info')
const GovernmentLeaders = () => {
    const listOfLeaders = useGovernment()
    for (const leaders of listOfLeaders) {
        const htmlRepresentation = Government(leaders)
        TargetContent.innerHTML += htmlRepresentation
    }
}
export default GovernmentLeaders