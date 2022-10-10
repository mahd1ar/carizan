<template>
  <div class="w-full">
    <GeneralCategory v-if="!!items" :items="items" />
    <FooterSection />
  </div>
</template>

<script lang="ts">
import {
  ChildCategoriesBySlugQuery,
  ChildCategoriesBySlugQueryVariables,
  LanguageCodeEnum,
} from '@/types/types'
import CHILDCATBYSLUG from '@/apollo/query/child-categories-by-slug.gql'
import { useQuery } from '@vue/apollo-composable/dist'
import {
  computed,
  defineComponent,
  useContext,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'categoriesBySlug',
  setup() {
    const { i18n, localePath } = useContext()
    const route = useRoute()
    const router = useRouter()
    const { $mitt } = useContext()

    const variable: ChildCategoriesBySlugQueryVariables = {
      id: route.value.params.id,
      language:
        i18n.locale.toLocaleUpperCase() === 'fa'
          ? LanguageCodeEnum.En
          : LanguageCodeEnum.Fa,
    }
    const { result } = useQuery<ChildCategoriesBySlugQuery>(
      CHILDCATBYSLUG,
      variable
    )

    console.log(i18n.locale)
    console.log(route.value.params.id)

    $mitt.on('languageSwitched', () => {
      router.push({
        path: localePath('/categories'),
        params: {
          id: result.value!.category!.translation!.id,
        },
      })
    })

    return {
      items: computed(() => {
        return result.value?.category?.children?.edges?.map((i) => ({
          title: i?.node?.name,
          excerpt: i?.node?.description,
          link: i?.node?.id,
        }))
      }),
    }
  },
})
</script>
