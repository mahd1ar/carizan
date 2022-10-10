<template>
  <div class="bg-black w-full h-full text-white">
    <img :src="srcUrl" alt="" />
    <!-- <img src="" alt=""> -->
    <nuxt-link :to="refPath">go back</nuxt-link>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useRoute,
  useRouter,
  useAsync,
} from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'nolayout',
  name: 'viewer',
  setup() {
    const route = useRoute()
    const router = useRouter()

    let srcUrl: string,
      refPath = '/'
    const { src, ref } = <{ src: string; ref: string }>route.value.query

    if (Array.isArray(src)) {
      if (src[0] === null) {
        router.go(-1)
      } else srcUrl = src[0]
      return 0
    } else {
      srcUrl = src
    }

    refPath = ref === null || ref === '' ? '/' : ref

    return {
      srcUrl,
      refPath,
    }
  },
})
</script>
