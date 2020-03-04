const Landmarks = (landmarks) => {
    return `
    <li><a href="${landmarks.link}" target="_blank"> ${landmarks.name}</a></li>
    `
}

export default Landmarks