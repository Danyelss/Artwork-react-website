export const getListRandomImages = (section) => {
    let list = [];
    let file = require('../database-' + section + '/data.json');

    file.forEach(element => {
        element.urls.forEach(item => {
            list.push(item.url);
        });
    });

    var arr = [];
    while (arr.length < 4) {
        var r = Math.floor(Math.random() * (list.length -1));
        console.log(r);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    
    let randomList = [];
    randomList.push(list[arr[0]]);
    randomList.push(list[arr[1]]);
    randomList.push(list[arr[2]]);
    randomList.push(list[arr[3]]);

    return randomList;
}

export const getListWithAllTheImages = (section) => {
    let list = [];
    let file = require('../database-' + section + '/data.json');

    file.forEach(element => {
        element.urls.forEach(item => {
            list.push(item);
        });
    });

    return list;
}

export const getArticleInfoById= (section, id) => {
    let list = [];
    let file = require('../database-' + section + '/data.json');

    let article = file[id];
    let title = article.title;
    let body = article.body;
    list = article.urls;

    return {title, body, list};
}


export const getImageForErrorPage = () => {
    let file = require('../assets/errorImages.json');

    var r = Math.floor(Math.random() * (file.length -1));

    console.log(r);

    return file[r];
}