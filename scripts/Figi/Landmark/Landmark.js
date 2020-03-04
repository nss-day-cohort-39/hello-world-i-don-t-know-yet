const Landmark = (landmarkObject) => {
    return `
        <li><a href="${landmarkObject.image}" target="_blank"> ${landmarkObject.name}</a></li>
    `
}
export default Landmark