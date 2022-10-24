<template>
  <div>
    <div class="h-[400px] bg-black w-full overflow-hidden relative">
      <img v-if="image" class="w-full" :src="image" :alt="altimage || ''" />
      <!-- overlay -->
      <div
        class="bg-gradient-to-l from-black to-transparent absolute top-0 left-0 z-10 w-full h-full"
      >
        <div class="container flex items-center h-full">
          <h1
            class="text-white text-6xl"
            v-motion
            :initial="{
              opacity: 0,
              x: 100,
            }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
              },
            }"
          >
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
    <div>
      <div class="container my-10 page-template-body">
        <WYSIWYG v-if="body" :html="body || ''" :includeGallery="false" />
        <slot v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

defineProps({
  image: String,
  altimage: String,
  title: String,
  body: String as PropType<string | null | undefined>,
})
</script>
