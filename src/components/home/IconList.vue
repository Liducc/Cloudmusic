<template>
    <div class="swipe" >
        <span v-for="(ima, index) in images.list" :key="index" :class="{ hidden: index >= 5 }">
            <img :src="ima.iconUrl" />
            <p>{{ ima.name }}</p>
        </span>
    </div>
</template>

<script>
import { getIcon } from '@/request/api/home.js'
import { reactive, onMounted } from 'vue'
export default {
    setup() {
        const images = reactive({
            list: []
        })

        onMounted(async () => {
            try {
                const res = await getIcon()
                images.list = res.data.data
            } catch (error) {
                console.error(error)
            }
        })
        return { images }

    }
}
</script>
<style lang="less" scoped>
img {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: rgb(254, 90, 89);
}

.swipe {
    display: flex;
    overflow-y: auto;
    text-align: center;
    margin: 0px 10px 0px 12px;
}

.swipe::-webkit-scrollbar {
    display: none;
}

.swipe span {
    padding: 18px 15px 0px 8px ;
}

.swipe p {
    font-size: 0.1rem;
    align-items: center;
    opacity: 0.7;
}

.hidden {
   // display: none;
}
</style>