import service from "..";
// 获取歌单详情页数据
export function getMusicItem(data) {
    return service({
        method:'GET',
        url:`/playlist/detail?id=${data}`
    })
}
// 获取歌单所有歌曲
export function getMusic(data) {
    return service({
        method:'GET',
        url: `/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}