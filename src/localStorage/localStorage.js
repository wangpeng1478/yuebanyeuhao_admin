/**
 * 设置  本地缓存
 */
 function setStorage(key, obj) {
    if (typeof obj === 'string') {
        localStorage.setItem(key, obj);
    } else {
        localStorage.setItem(key, JSON.stringify(obj));
    }
}

/**
 * 获取
 */
 function getStorage(key) {
    let val = localStorage.getItem(key);
    try {
        return JSON.parse(val);
    } catch (e) {
        return val;
    }
}

/**
 * 删除， 如果不传值，删除所有
 */
 function clearStorage(key) {
    if (key) {
        localStorage.removeItem(key);
    } else {
        localStorage.clear();
    }
}


module.exports = {
    setStorage,
    getStorage,
    clearStorage
}