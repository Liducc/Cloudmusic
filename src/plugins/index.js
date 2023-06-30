import { Swipe, SwipeItem, Button, Divider } from 'vant';
// 放入数组
let plugins = [
  Swipe, SwipeItem, Button, Divider
]
export default function getVant(app) {
    plugins.forEach((item)=>{
        return app.use(item)
    })
}