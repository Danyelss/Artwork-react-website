export const getListRandomImages = (section) => {
    let list = [];
    let file = require('../database-' + section + '/data.json');

    file.forEach(element => {
        element.urls.forEach(item => {
            list.push(item);
        });
    });

    var arr = [];
    while (arr.length < 4) {
        var r = Math.floor(Math.random() * (list.length -1)) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    
    let randomList = [];
    randomList.push(list[arr[0]]);
    randomList.push(list[arr[1]]);
    randomList.push(list[arr[2]]);
    randomList.push(list[arr[3]]);

    return randomList;
}