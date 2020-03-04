const landmark = (location) => {
    return `
    <li><a href="${location.link}" target="_blank">${location.name}</a></li>
    `
}

export default landmark;