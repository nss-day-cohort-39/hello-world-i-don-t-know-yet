const Landmark = (landmarkObject) => {
    return `
    <ul>
        <li><a href="${landmarkObject.image}" target="_blank"> ${landmarkObject.name}</a></li>
    </ul>
    `
}
export default Landmark