const http = require('http');

/**
 * 根据id获取网易云音乐
 * 测试id scott的网易云音乐id=317921676
 * ---------------------------------------
 * todo 直接调用网易接口 and 数据格式化
 * ---------------------------------------
 */
exports.getMusicById = (req, res, next) => {
    let id = req.query.id;
    http.get(`http://120.24.162.247/api/Music?id=${id}`, (response) => {
        console.log(`Got response: ${res.statusCode}`);
        let str = "";
        response.setEncoding('utf8');
        response.on('data', (r) => {
            str += r;
        });
        response.on('end', () => {
            res.send(JSON.parse(str));
        });
    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}