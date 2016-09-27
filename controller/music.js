/**
 * 根据id获取网易云音乐
 * 测试id scott的网易云音乐id=317921676
 */
exports.getMusicById = (req, res, next) => {
    var id = "317921676";//req.query.id;
    res.send(`${id}`);
}