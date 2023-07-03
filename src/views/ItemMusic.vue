<template>
<ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
<ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"></ItemMusicList>
</template>
<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItem, getMusic } from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
import ItemMusicList from '@/components/item/ItemMusicList.vue'
export default {
    setup() {
        const state = reactive({
            playlist: {},// 歌单详情页
            itemList:[]// 歌单的歌曲
        })
        onMounted(async() => {
            let id = useRoute().query.id
           // console.log(id);
           // 获取歌单详情页
            let res = await getMusicItem(id)
            console.log(res);
            state.playlist = res.data.playlist
            // 获取歌单的歌曲
            let result = await getMusic(id)
            console.log(result);
            state.itemList = result.data.songs
           // console.log(state.playlist);
           // 放置页面刷新数据丢失 将数据保存到本地
            sessionStorage.setItem('itemDetail', JSON.stringify(state))
        })
        return {state}
    },
    components: {
        ItemMusicTop,
        ItemMusicList
    }
}


</script> 