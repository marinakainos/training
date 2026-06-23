const getCatsList = (cats) => {
    return cats.map(c => c.name).join(", ");
}

module.exports = {
    getCatsList
}