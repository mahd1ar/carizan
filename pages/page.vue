<template>
  <LoadingIndicator :isLoading="loading">
    <div>
      <div class="h-[400px] w-full overflow-hidden relative">
        <img src="/sample/sample1.jpg" alt="" />
        <!-- overlay -->
        <div
          class="bg-gradient-to-l from-black to-transparent absolute top-0 left-0 z-10 w-full h-full"
        >
          <div class="container flex items-center h-full">
            <h1 class="text-white text-6xl">
              {{ title }}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div class="container my-10">
          <WYSIWYG :html="content" :includeGallery="false" />
        </div>
      </div>

      <ShoppingCards />
      <FooterSection />
    </div>
  </LoadingIndicator>
</template>

<script lang="ts" setup>
import { computed, useContext, useRoute } from '@nuxtjs/composition-api'
import { useQuery } from '@vue/apollo-composable/dist'
import { LanguageCodeEnum, PageQueryVariables, PageQuery } from '~/types/types'

import PAGE from '@/apollo/query/page.gql'

const route = useRoute()
const ctx = useContext()

const id = route.value.query.id as string

if (!id) ctx.error({ message: 'not found', statusCode: 500 })

const variable: PageQueryVariables = {
  id,
  language:
    ctx.i18n.locale.toLowerCase() === 'fa'
      ? LanguageCodeEnum.En
      : LanguageCodeEnum.Fa,
}

const { onError, loading, result } = useQuery<PageQuery>(PAGE, variable)

onError(() => {
  ctx.error({ message: '_SOMETHING_WENTWRONG', statusCode: 500 })
})

const title = computed(() => {
  return result.value?.page?.title || ''
})

const content = computed(() => {
  return result.value?.page?.content || ''
})
// ctx.i18n.onLanguageSwitched = (_, nlang) => {
//   console.log('lang switched')
// }
</script>
