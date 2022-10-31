<template>
  <div
  ref="root"
    class="w-full flex gap-2"
    :class="{ container: !full, 'flex-row-reverse': left }"
  >
    <div class="w-1/2 flex justify-start">
      <div
        class="flex flex-col items-start justify-center gap-4"
        :class="left ? 'pr-10' : 'pl-10'"
      >
        <h2 class="text-5xl font-bold text-tm-gray-dark">
          {{ title }}
        </h2>
        <p
          ref="snipable"
          style="opacity: 0"
          class="text-zinc-500 pl-10 h-24 overflow-hidden"
          v-snip="{ lines: 4, onSnipped }"
        >
          {{ body }}
        </p>
        <nuxt-link
          :to="link"
          class="bg-gray-700 px-4 overflow-hidden inline-flex flex-row-reverse py-2 text-bold text-primary items-start gap-1 rounded"
        >
          <svg
            class="w-5 h-5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z"
            />
            <path
              fill="currentColor"
              d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"
            />
          </svg>
          <span
            class="px-2 hover:px-4 transition-all flex justify-center items-center"
          >
            <!-- TODO : translate this -->
            <!-- _SEEMORE  -->
            ادامه
          </span>


        </nuxt-link>
      </div>
    </div>
    <div
      class="w-1/2 h-[400px] rounded overflow-hidden shadow-xl shadow-gray-400"
    >
      <img
        v-if="img"
        v-motion
        :initial="{
          scale: 1.5,
              x: 100,
            }"
        :enter="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            mass: 0.5,
            delay: index * 100,
          },
        }"
        ref="target"
        class=" origin-right translate-x-24 scale-150 h-full w-full object-cover transition-all ease-out duration-700"
        :src="img"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onBeforeUnmount ,onMounted } from '@nuxtjs/composition-api'

import { useIntersectionObserver, useParallax } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'

const root = ref<HTMLElement>()

const {
  full = false,
  left = false,
  title = '',
  body = '',
  img = '',
  link = '',
  index = 0
} = defineProps<{
  full: Boolean
  left: Boolean
  title: String
  body: String
  img: String
  link: String
  index: number
}>()

const target = ref(null)
const snipable = ref<HTMLElement>()
const targetIsVisible = ref(false)

const onSnipped = () => {
  useMotion(snipable, {
    initial: {
      opacity: 0,
      x: -10,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration : 1000
        
      },
    },
  })
}

onBeforeUnmount(() => {
  if (snipable.value) snipable.value.style.opacity = '0'
})

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  }
)

watch(targetIsVisible, () => {})
</script>
