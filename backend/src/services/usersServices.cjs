function isEmpty(itm) {
    return itm.length === 0;
}

function findUser(itm, toCheck, findID = false) {
    const userId = parseInt(itm);
    let user;
    if (!findID) {
        user = toCheck.find(u => u.id === userId);
    } else {
        user = toCheck.findIndex(u => u.id === userId);
    }
    return user;
}

function updateObject(toUpdate, newVal) {
    if (!toUpdate || !newVal) {
        return null;
    }
    return { ...toUpdate, ...newVal };
}

module.exports = { isEmpty, findUser, updateObject };