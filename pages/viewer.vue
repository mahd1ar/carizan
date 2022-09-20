<template>
    <div class="bg-black w-full h-full text-white">
        <img src="https://dummyimage.com/600x400/eb65eb/484d96" alt="">
        <!-- <img src="" alt=""> -->
        <nuxt-link to="f4">go back</nuxt-link>
    </div>
</template>

<script lang="ts" >
import { defineComponent, useFetch, useRoute, useRouter, useAsync } from "@nuxtjs/composition-api";

export default defineComponent({
    layout: "nolayout",
    setup() {
        const route = useRoute();
        const router = useRouter();

            let srcUrl: string
            const { src } = route.value.query
    
            if (Array.isArray(src)) {
                if (src[0] === null) {
                    router.go(-1)
                } else
                    srcUrl = src[0]
                    return 0
                }else{   
                    srcUrl = src
                }

     

        return {
            srcUrl
        }

    }
})

</script>

