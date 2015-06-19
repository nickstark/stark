export default function(prop, dataArr, val) {
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i][prop] === val) {
            return dataArr[i];
        }
    }

    return null;
};
