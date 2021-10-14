export const updateObjectArray = (items, itemId, propObjName, newPropObj) => {
    return items.map(i => {
        if (i[propObjName] === itemId) {
            return {...i, ...newPropObj}
        }
        return i
    });
}