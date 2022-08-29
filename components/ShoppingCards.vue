<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="grid grid-cols-4 gap-8">
        <div class="" v-for="i in 4" :key="i">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                CATEGORY
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                The Catalyzer
              </h1>
              <p class="mb-3 leading-7 text-lg">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  class="text-tm-yellow-dark inline-flex items-center gap-2 md:mb-2 lg:mb-0"
                >
                  مشاهده محصول
                  <svg
                    class="w-4 h-4 rotate-180"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    cards: {
      type: Array as PropType<
        {
          title: string
          content: string
        }[]
      >,
      default: () => [],
    },
  },
})
</script>
