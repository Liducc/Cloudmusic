<template>
    <!-- 歌单顶部功能键 -->
    <div class="itemMusicTop">
        <img :src="playlist.coverImgUrl" alt="" class="bgimg">
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuojiantou" @click="$router.go(-1)"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true" style="color: #fff !important;">
                <use xlink:href="#icon-sousuo1"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-MENU"></use>
            </svg>
        </div>
    </div>
    <!-- 歌单信息 -->
    <div class="listTitle">
        <div class="musicImg"> <!-- 歌单信息 包含图片 标题 作者头像  作者用户名 歌单介绍 -->
            <img :src="playlist.coverImgUrl" alt="" class="smImg">
        </div>
        <div class="musicTitle">
            <div class="text"> <!-- 歌单名-->
                <span>{{ playlist.name }}</span>
            </div>
            <div class="idTitle"><!-- 用户信息-->
                <img :src="playlist.creator.avatarUrl" alt="" class="headImg">
                <span>{{ playlist.creator.nickname }}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanzhu1"></use>
                </svg>
            </div>
            <div class="listDuce"><!-- 歌单介绍 -->
                <span>{{ playlist.description }}</span>
            </div>
        </div>
    </div>
    <div class="dataNum"><!-- 各类数据 包含收藏数 评论数 和分享数 -->
        <div class="shareNum"><!-- 分享数量 -->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiangpt-wangyiicon"></use>
            </svg>
            {{ playlist.shareCount }}
        </div>
        <div class="reviewNum"><!-- 评论数量 -->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglunpt-wangyiicon"></use>
            </svg>
            {{ playlist.commentCount }}
        </div>
        <div class="collectNum"><!-- 收藏数量 -->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoucang"></use>
            </svg>
            {{ playlist.subscribedCount }}
        </div>
    </div>
</template>
<script>
export default {
    setup(props) {
        console.log(props);
        /* 如果数据拿不到 就获取sessionStorage */
        if ((props.playlist.creator = "")) {
            props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
        }
    },
    props: ['playlist']
}
</script>
<style lang="less" scoped>
.itemMusicTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: .2rem;
    position: relative;

    .itemLeft,
    .itemRight {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;

        span {
            font-size: .38rem;
            color: #fff;
        }

        .icon {
            fill: #fff // 填充颜色

        }
    }

    .bgimg {
        width: 100%;
        height: 12rem;
        position: fixed;
        z-index: -1;
        filter: blur(.4rem);
    }
}

.listTitle {
    display: flex;
    height: 4.5rem;

    .musicImg {
        flex: 1;
        width: 50%;
        height: 100%;

        .smImg {
            padding: .6rem .3rem;
            display: inline-block;
            width: 3.8rem;
            height: 100%;
            border-radius: 22%;
        }
    }


    .musicTitle {
        width: 50%;
        height: 100%;
        display: flex;
        padding: .5rem 0rem;
        padding-right: .2rem;
        align-items: flex-start;
        /* 垂直居中 */
        flex-direction: column;
        gap: .15rem;
        box-sizing: border-box;


        .text {
            span {
                word-break: break-all;
                font-size: .35rem;
                font-weight: bold;
                color: #fff;
            }
        }


        .idTitle {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                color: #ccc;
                margin-left: .15rem;
            }

            .headImg {
                width: .5rem;
                height: .5rem;
                border-radius: 100%;
                vertical-align: middle
            }

            .icon {
                fill: #fff;
                width: .5rem;
                height: .5rem;
                margin:0rem .1rem 0rem .1rem;
            }
        }

        .listDuce {
            color: #ccc;
        }

        .listDuce {
            display: block;
            overflow-x: hidden;
        }
    }
}
.dataNum{
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 0rem .2rem;
    .shareNum,.reviewNum,.collectNum{
        color: #fff;
        padding: .15rem 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .1rem;
        width: 30%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 1rem;
        background-color: #ccc;
        .icon{
            fill: #fff;
        }
    }
}
</style>