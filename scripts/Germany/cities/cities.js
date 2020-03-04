const Cities = (citiesObject) => {
    return `
  <li><a href=${citiesObject.link} target="_blank">${citiesObject.name}</a>
    `
}

export default Cities