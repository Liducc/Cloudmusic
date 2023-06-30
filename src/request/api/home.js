import service from "..";
// 获取首页轮播图的数据 请求banner
export function getBanner() {
    return service({
        method: 'GET',
        url:'/banner?type=2',
    })
}
// 获取首页圆形入口
export function getIcon() {
    return service({
        method: "GET",
        url:'/homepage/dragon/ball'
    })
}

// 获取推荐歌单入口
export function getMusicList() {
    return service({
        method: "GET",
        url:'/personalized?limit=30'
    })
}