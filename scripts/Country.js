const CountryHTML = (countryObject) => {
    return `
    <section class="country--cities">
      <h4>${countryObject.name}</h4>
      <ul>
        <li>${countryObject.link1}</li>
        <li>${countryObject.link2}</li>
        <li>${countryObject.link3}</li>
      </ul>
    </section>
 `
}
export default CountryHTML
