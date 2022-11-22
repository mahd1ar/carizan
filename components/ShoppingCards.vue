<template>
  <section class="text-gray-600 body-font">

    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap -m-4">
        <!-- v-motion
        :initial="{ opacity: 0.4 }"
        :visible="{
          opacity: 1,
        }" -->
        <div
          v-for="(i, index) in cards"
          :key="i.id"
          class="p-4 md:w-1/3"
          :delay="(index % 3) * 200"
        >
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              v-if="i.image"
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="i.image"
              alt="blog"
            />
            <div class="p-6 border-t-4 border-primary">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                {{ $t('category') }}
              </h2>
              <h1
                class="title-font text-lg font-medium text-gray-900 mb-3"
                v-html="i.title"
              ></h1>
              <p class="leading-relaxed mb-3" v-text="i.body"></p>
              <!-- localePath('/product?id=' + i.id) -->
              <div class="flex items-center flex-wrap">
                <nuxt-link
                  v-if="i.link.search(/api\.carizanin\.com/) === -1"
                  :to="i.link"
                  class="text-primary-dark inline-flex items-center gap-1 md:mb-2 lg:mb-0 rtl:flex-row-reverse"
                >
                 {{ $t('more') }}
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  
                </nuxt-link>
                <a
                  v-else
                  :href="i.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary inline-flex items-center md:mb-2 lg:mb-0"

                >
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  دانلود
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PropType } from '@nuxtjs/composition-api'

const { cards = [] } = defineProps({
  cards: {
    type: Array as PropType<
      {
        id: string
        image: string
        title: string
        body: string
        link: string
      }[]
    >,
  },
})
</script>
