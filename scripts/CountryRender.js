  
import { useCountryData } from "./CountryDataProvider.js";
import CountryHTML from "./Country.js"

const contentTarget = document.querySelector(".country")

export const CountryRender = () => {
    // Get a reference to the `<article class="content">` element
    //const contentElement = document.querySelector("XXX")
    const CountryArray = useCountryData()

    for (const item of CountryArray){

    
    //const CountryOutput=CountryHTML(item)
    // Add to the existing HTML in the content element
    contentTarget.innerHTML+= CountryHTML(item)
    }
}

export default CountryRender