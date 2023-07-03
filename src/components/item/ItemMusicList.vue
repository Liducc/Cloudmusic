<template>
    <div class="listTop">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <b>播放全部</b> <span>(共{{ itemList.length }}首)</span>
        </div>
    </div>
    <div class="listMusic" v-for="(item, i) in itemList" :key="i">
        <div class="listLeft">
            <span class="leftSpan">{{ i + 1 }}</span>
            <div>
                <span>{{ item.name }}</span>
                <br>
                <span v-for="(item1, index) in item.ar" :key="index">
                    {{ item1.name }}
                </span>
            </div>
        </div>
        <div class="listRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    setup(props) {
    },
    props: ['itemList', 'subscribedCount']
}
</script>
<style lang="less" scoped>
.listTop {
    margin-top: .6rem;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;

    .topLeft {
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        padding: 0rem .3rem;

        b {
            font-size: .35rem;
            padding-left: .3rem;
        }

        span {
            color: #ccc;
            font-size: .25rem;
        }
    }
}

.listMusic {
    height: 1rem;
    width: 100%;
    display: flex;

    .listLeft {
        width: 80%;
        height: 1rem;
        display: flex;
        align-items: center;

        .leftSpan{
            padding: 0 .3rem;
        }
        div {
            display: inline-block;
        }
    }
    .listRight {
        width: 20%;
        height: 1rem;
        display: flex;
        align-items: center;
    }
}
</style>