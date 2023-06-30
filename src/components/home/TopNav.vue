<template>
    <div class="topNav">
        <!-- 顶部左边 -->
        <div class="topleft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
        <!-- 顶部中间 -->
        <div class="topCenter">
            <span class="navBtn">我的</span>
            <span class="navBtn active">发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span>
        </div>
        <!-- 顶部右边 -->
        <div class="topright">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            width: .4rem;
            height: .4rem;
        }
        .topCenter{
            width: 4.5rem;
            display: flex;
            justify-content: space-around;
            .active{
                font-weight: 900;
            }
        }
    }
</style>