<template>
  <!-- layout -->

  <div class="w-full">
    <HeroSection />

    <div v-if="cats[0]" class="flex relative bg-primary h-[50vh]">
      <div class="w-6/12 relative" style="clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)">
        <img class="w-full object-cover h-full" :src="cats[0].img" alt="" />
      </div>
      <div class="w-6/12 relative flex items-center bg-primary overflow-hidden">
        <!-- <img
            class="w-full object-cover absolute grayscale scale-150 opacity-10 pointer-events-none"
            src="/sample/sample1.jpg"
            alt=""
          /> -->
        <div class="container flex flex-col justify-start items-start gap-4">
          <h2 class="text-5xl font-semibold text-gray-700">{{ cats[0].name }}</h2>
          <p>
            {{cats[0].description}}
          </p>
          <!-- :to="'/categories/' + cats[1].id" -->
          <nuxt-link to="/products"
            class="bg-gray-700 px-4 py-2 text-bold text-primary flex items-center gap-2 rounded">
            <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z" />
              <path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
            <span class="px-2 hover:px-4 transition-all"> مشاهده </span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div v-if="cats[1]" class="flex relative flex-row-reverse bg-tm-gray-dark h-[50vh]">
      <div class="w-7/12 relative">
        <img v-if="cats[1].img" class="w-full object-cover h-full" :src="cats[1].img"
          style="clip-path: polygon(0px 0px, 100% 0px, 85% 100%, 0% 100%)" alt="" />
      </div>
      <div class="w-5/12 relative flex items-center bg-tm-gray-dark overflow-hidden">
        <div class="container flex flex-col justify-start items-start gap-4">
          <h2 class="text-5xl font-semibold text-gray-200">{{ cats[1].name }}</h2>
          <p class="text-gray-300" v-text="cats[1].description"></p>

          <!-- :to="'/categories/' + cats[0].id" -->
          <nuxt-link to="/services"
            class="bg-gray-200 px-4 py-2 text-bold text-tm-black flex items-center gap-2 rounded">
            <svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z" />
              <path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
            <span class="px-2 hover:px-4 transition-all"> مشاهده </span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="w-full flex py-20">
        <div class="w-4/12 rounded shadow-md overflow-hidden">
          <img :src=" explain.imageSrc || '/sample/sample3.jpg' " class="object-cover h-full" :alt="explain.imageAlt" />
        </div>
        <div class="w-8/12 px-8">
          <div class="gap-4 flex flex-col">
            <h2 class="text-3xl font-semibold text-gray-700">{{ explain.title }}</h2>
            <p v-text="explain.body">
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-800 body-font py-24">
      <div class="container relative px-5 mx-auto flex flex-wrap rounded-lg shadow overflow-hidden">
        <img class="absolute h-full object-cover w-full" src="/sample/sample4.jpg" alt="" />
        <div class="w-full h-full bg-gradient-to-l from-slate-200 to-transparent absolute top-0 left-0"
          aria-hidden="true"></div>
        <div class="relative flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
              Moon hashtag pop-up try-hard offal truffaut
            </h1>
            <div class="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p class="leading-relaxed">Users</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
            <p class="leading-relaxed">Subscribes</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
            <p class="leading-relaxed">Products</p>
          </div>
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
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
        imageSrc: result.value?.page?.featuredImage?.node?.sourceUrl || "",
        imageAlt: result.value?.page?.featuredImage?.node?.altText || "",
        title: result.value?.page?.title || "",
        body: stripHtml( result.value?.page?.content || '')
      }
    })

    return {
      cats, explain
    }
  },
})
</script>
