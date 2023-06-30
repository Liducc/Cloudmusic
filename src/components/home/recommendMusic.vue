<template>
    <!-- 每日推荐和推荐歌单中的线条 -->
    <van-divider />
    <div class="musicList">
        <!-- 顶部推荐歌单 -->
        <div class="musicList-top">
            <div class="title">推荐歌单</div>
            <div class="more">更多<svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuojiantou1"></use>
                </svg>
            </div>
        </div>
        <!-- 歌单部分 -->
        <div class="songList">
            <div class="imgs" v-for="(img, index) in playList.list" :key="index">
                <router-link :to="{path:'/itemMusic',query:{id:img.id}}">
                <img :src="img.picUrl" />
                <div class="count">
                    <span class="numbers">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-a-24gl-play"></use>
                        </svg>
                        {{ formatNum(playList.list[index].playCount) }}
                    </span>
                </div>
                <p>{{ img.name }}</p>
            </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { getMusicList } from '@/request/api/home.js'
import axios from 'axios';
import { reactive, onMounted, computed } from 'vue';
export default {
    setup() {
        const playList = reactive({
            list: []
        })
        // axios.get('http://localhost:3000/personalized?limit=30').then((res) => {
        //     console.log(res.data.result[1].playCount);
        // })

        // 格式化输出听歌人数
        const formatNum = computed(() => {
            return function (num) { 
                if (num > 100000000) {
                    return (num/100000000).toFixed(2)+'亿'
                } else if (num > 10000) {
                    return(num/10000).toFixed(2)+'万'
                } else {
                    return
                }
            }
        
        })

        onMounted(async () => {
            try {
                const res = await getMusicList()
                playList.list = res.data.result
                // peopleNum = res.data.result.playCount

            } catch (error) {
                console.log(error);
            }
        })
        return { playList, formatNum }

    }
}
</script>
<style lang="less">
.musicList-top {
    display: flex;
    margin: 5px 15px 10px 15px;
    justify-content: space-between;
    align-items: center;

    .title {
        font-weight: 900;
    }

    .more {
        width: 1rem;
        height: .4rem;
        font-size: .2rem;
        border: 1px solid rgb(224, 224, 224);
        border-radius: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        width: .2rem;
        height: .2rem;
    }
}



.songList {
    display: flex;
    overflow-x: auto;
    img {
    width: 2rem;
    height: 2rem;
    border-radius: 10%;
    background: rgb(254, 90, 89);
}
}

.songList::-webkit-scrollbar {
    display: none;
}

.songList .imgs {
    margin: 18px 0px 0px 18px;
    position: relative;
}

.songList p {
    font-size: 5px;
    align-items: center;
    opacity: 0.7;
}

.count {
    position: absolute;
    display:inline-block;
    right: 0.1rem;
    top: 0.1rem;
    font-size: 0.24rem;
    color: rgb(246, 247, 250);
    border-radius: 5px;
    background-color: rgba(19, 19, 19, 0.4);;

    .icon {
        width: 0.2rem;
        height: 0.2rem;
    }

    .numbers {
        font-size: 0.2rem;
        .icon {
            margin-top: 1px;
        }
    }
}
.songList p {
    font-size: 0.1rem;
    align-items: center;
    opacity: 0.7;
}
</style>