<template>
  <div class="">
    <transition name="fade">
      <figure
        @click="preview"
        v-show="isImageLoaded"
        class="imghvr-push-down cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          :style="{ objectFit: obj }"
          :src="src"
          alt=""
          @load="imageLoaded"
        />
        <figcaption>
          <h3>title</h3>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            ratione ab dolorum quas vel repellat. Doloremque, laboriosam
            voluptatem recusandae culpa eligendi, voluptatum quam tempora ullam
            alias facere libero mollitia perferendis.</span
          >
        </figcaption>
      </figure>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType,
  ref,
  useContext,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'

const router = useRouter()
const route = useRoute()
const isImageLoaded = ref(false)
const { localePath } = useContext()
function imageLoaded() {
  console.log('imageLoaded')
  isImageLoaded.value = true
}
const { obj = 'cover', src } = defineProps({
  src: { type: String, required: true },
  obj: {
    type: String as PropType<'cover' | 'contain'>,
  },
})

const preview = () => {
  router.push({
    path: localePath('/viewer'),
    query: {
      src,
      ref: route.value.fullPath,
    },
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.9);
}
</style>
