<template>
  <!-- layout -->

  <div class="w-full">
    <HeroSection />

    <div v-if="cats[0]" class="relative flex h-[50vh] bg-primary">
      <div class="product relative w-6/12">
        <img class="h-full w-full object-cover" :src="cats[0].img" alt="" />
      </div>
      <div
        class="absolute flex h-full w-full items-center overflow-hidden bg-none sm:relative sm:w-6/12 sm:bg-primary"
      >
        <!-- <img
            class="w-full object-cover absolute grayscale scale-150 opacity-10 pointer-events-none"
            src="/sample/sample1.jpg"
            alt=""
          /> -->
        <div
          class="container flex flex-col items-end justify-start gap-4 sm:items-start"
        >
          <h2 class="text-5xl font-semibold capitalize text-gray-700">
            {{ cats[0].name }}
          </h2>
          <p>
            {{ cats[0].description }}
          </p>
          <nuxt-link
            :to="localePath('/pich-gostar/products')"
            class="text-bold flex items-center gap-2 rounded bg-gray-700 px-4 py-2 text-primary rtl:flex-row-reverse"
          >
            <span class="px-2 transition-all hover:px-4">
              {{ $t('see') }}
            </span>
            <svg
              class="h-5 w-5 flex-shrink-0 rotate-180 rtl:rotate-0"
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
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      v-if="cats[1]"
      class="relative flex h-[50vh] flex-row-reverse bg-tm-gray-dark"
    >
      <div class="relative w-7/12">
        <img
          v-if="cats[1].img"
          class="service h-full w-full object-cover"
          :src="cats[1].img"
          alt=""
        />
      </div>
      <div
        class="relative flex w-5/12 items-center overflow-hidden bg-tm-gray-dark"
      >
        <div class="container flex flex-col items-start justify-start gap-4">
          <h2 class="text-5xl font-semibold capitalize text-gray-200">
            {{ cats[1].name }}
          </h2>
          <p class="text-gray-300" v-text="cats[1].description"></p>

          <nuxt-link
            :to="localePath('/pich-gostar/services')"
            class="text-bold flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-tm-black rtl:flex-row-reverse"
          >
            <span class="px-2 transition-all hover:px-4">
              {{ $t('see') }}
            </span>
            <svg
              class="h-5 w-5 flex-shrink-0 rotate-180 rtl:rotate-0"
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
          </nuxt-link>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="relative flex w-full flex-col py-20 sm:flex-row">
        <div class="w-full overflow-hidden rounded shadow-md sm:w-4/12">
          <img
            :src="explain.imageSrc || '/sample/sample3.jpg'"
            class="h-full w-full object-cover"
            :alt="explain.imageAlt"
          />
        </div>
        <div
          class="absolute bottom-0 w-full bg-black px-8 py-4 text-white sm:relative sm:w-8/12 sm:bg-gray-100 sm:py-0 sm:text-black"
        >
          <div class="flex flex-col gap-4">
            <h2 class="text-3xl font-semibold text-primary sm:text-gray-700">
              {{ explain.title }}
            </h2>
            <p v-text="explain.body"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="body-font py-24 text-gray-800">
      <div
        class="container relative mx-auto flex flex-wrap overflow-hidden rounded-lg px-5 shadow"
      >
        <img
          class="absolute h-full w-full object-cover"
          src="/sample/sample4.jpg"
          alt=""
        />
        <div
          class="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-slate-200 to-transparent"
          aria-hidden="true"
        ></div>
        <div
          class="relative -mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2"
        >
          <div class="mb-6 w-full px-4 sm:p-4">
            <h1 class="title-font mb-2 text-xl font-medium text-gray-900">
              Moon hashtag pop-up try-hard offal truffaut
            </h1>
            <div class="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">2.7K</h2>
            <p class="leading-relaxed">Users</p>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">1.8K</h2>
            <p class="leading-relaxed">Subscribes</p>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">35</h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">4</h2>
            <p class="leading-relaxed">Products</p>
          </div>
        </div>
        <div
          class="mt-6 w-full overflow-hidden rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2"
        >
          <img
            class="h-full w-full object-cover object-center"
            src="https://dummyimage.com/600x300"
            alt="stats"
          />
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import HeroSectionVue from '~/components/homepage/HeroSection.vue'
import { useQuery } from '@vue/apollo-composable/dist'
import HOMEGQL from '@/apollo/query/home-page.gql'
import { HomeQuery, HomeQueryVariables, LanguageCodeEnum } from '@/types/types'
import { stripHtml } from '~/data/utils'

export default defineComponent({
  components: {
    HeroSection: HeroSectionVue,
  },

  name: 'IndexPage',
  setup() {
    const { i18n, error } = useContext()
    const variable: HomeQueryVariables = {
      languages:
        i18n.locale.toLowerCase() === 'fa'
          ? LanguageCodeEnum.Fa
          : LanguageCodeEnum.En,
    }

    const { result, onError } = useQuery<HomeQuery>(HOMEGQL, variable)

    onError(() => {
      error({ message: '_GET_INFO_ERROR', statusCode: 500 })
    })

    const cats = computed(() => {
      return result?.value?.categories?.edges
        ? result.value.categories.edges.map((i) => ({
            id: i!.node!.id,
            name: i?.node?.name || '',
            img: i?.node?.cat_cf?.image?.sourceUrl || '',
            description: i?.node?.description || '',
          }))
        : []
    })

    const explain = computed(() => {
      return {
        imageSrc: result.value?.page?.featuredImage?.node?.sourceUrl || '',
        imageAlt: result.value?.page?.featuredImage?.node?.altText || '',
        title: result.value?.page?.title || '',
        body: stripHtml(result.value?.page?.content || ''),
      }
    })

    return {
      cats,
      explain,
    }
  },
})
</script>

<style lang="scss">
.service {
  clip-path: polygon(0px 0px, 100% 0px, 60% 100%, 0% 100%);
}

html[dir='ltr'] .service {
  clip-path: polygon(80px 0px, 100% 0px, 100% 100%, 0% 100%);
}

@screen sm {
  .service {
    clip-path: polygon(0px 0px, 100% 0px, 85% 100%, 0% 100%);
  }
}

.product {
  clip-path: polygon(60% 0%, 100% 0, 100% 100%, 0% 100%);
}

html[dir='ltr'] .product {
  clip-path: polygon(0% 0%, 100% 0, 80% 100%, 0% 100%);
}

@screen sm {
  .product {
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  }
}
</style>
