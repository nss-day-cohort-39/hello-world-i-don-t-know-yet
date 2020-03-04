const Cities = (governmentObject) => {
    return `
        <li><a href="${governmentObject.image}" target="_blank">${governmentObject.name}</a></li>
    `
}

export default Cities