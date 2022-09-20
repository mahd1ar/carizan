<template>
  <div>
    <img class="w-full h-full" @click="preview" :style="{objectFit: obj}" :src="src" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { PropType, useContext, useRouter } from '@nuxtjs/composition-api'

const router = useRouter()
const { localePath } = useContext()

const { obj = "cover", src } = defineProps({
  src: { type: String, required: true },
  obj: {
    type: String as PropType<'cover' | 'contain'>,
  }
})

const preview = () => {
  router.push({
      name: localePath("viewer"),
      query: {
        src
      }
    })
}
</script>
