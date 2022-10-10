<template>
  <div>
    <!-- gap -->
    <div aria-hidden="true" class="h-6"></div>
    <div v-if="pageTitle" class="container mx-auto text-center py-10">
      <h2 class="text-xl font-bold">{{ pageTitle }}</h2>
    </div>
    <SimpleCard
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :body="item.excerpt"
      :left="!!(index % 2)"
      :style="{ '--count': index }"
      :link="item.link"
      img=""
    />
    <div aria-hidden="true" class="h-6"></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from '@nuxtjs/composition-api'

defineProps({
  items: Array as PropType<
    {
      title: string
      excerpt: string
      link: string
    }[]
  >,
  pageTitle: {
    type: String,
  },
})
</script>
