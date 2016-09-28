const http = require('http');

/**
 * 根据id获取网易云音乐
 * 测试id scott的网易云音乐id=317921676
 */
exports.getMusicById = (req, res, next) => {
    let id = req.query.id;
    var url = `http://music.163.com/api/playlist/detail?id=${id}`;
    http.get(url, (response) => {
        console.log(`Got response: ${res.statusCode}`);
        let str = "";
        response.setEncoding('utf8');
        response.on('data', (r) => {
            str += r;
        });
        response.on('end', () => {
            res.send(musicListResult(str));
        });
    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}

let musicListResult = (model) => {
    model = JSON.parse(model);
    let result = model.result.tracks;
    let muiscResult = [];
    result.forEach((item, index) => {
        let obj = {
            name: item.name,
            src: item.mp3Url,
            author: formatArtisets(item.artists),
            cover: item.album.picUrl
        }
        muiscResult.push(obj);
    });

    return muiscResult;
}

let formatArtisets = (artists) => {
    let artistsResult = [];
    artists.forEach((item, index) => {
        artistsResult.push(item.name);
    });

    return artistsResult.join("&");
}