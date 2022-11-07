<template>
  <div>
    <h1 class="text-3xl text-center my-4">image gallery</h1>
    <div class="container">
      <div class="grid grid-cols-3 gap-2   overflow-hidden">
        <div
          v-for="(i, index) in gs"
          :key="index"
          @click="selectedItem = index"
          class="w-full h-full"
        >
          <img :src="i" alt="" class="w-full h-full rounded object-cover shadow-lg" />
        </div>
      </div>
    </div>
    <Splide
      v-if="selectedItem > -1"
      :selected-item.sync="selectedItem"
      :images="images"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, computed, ref } from '@nuxtjs/composition-api'

const selectedItem = ref(-1)

const router = useRoute()
const gId = router.value.params.id

const gs = [
  'http://api.carizanin.com/wp-content/uploads/2022/10/annealing-metal-01.jpeg',
  'http://api.carizanin.com/wp-content/uploads/2022/10/DSC_1751-12.jpg',
]

const images = computed(() => {
  return gs.map((i) => ({ src: i, alt: '' }))
})
</script>
