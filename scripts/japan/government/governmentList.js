import { useArrayOfGovernmentObjects } from "./governmentDataProvider.js";
import statefigure from "./government.js";

const governmentList = () => {
    const leaderDOMLocation = document.querySelector(".government__listItems");
    const arrayOfLeaders = useArrayOfGovernmentObjects();

    for (const figurehead of arrayOfLeaders) {
        leaderDOMLocation.innerHTML += statefigure(figurehead);
    }
}

export default governmentList;