const Cities = (governmentObject) => {
    return `
        <ul>
            <li><a href="${governmentObject.image}" target="_blank">${governmentObject.name}</a></li>
        </ul>
    `
}

export default Cities