<template>

  <loading-indicator :isLoading="loading" class="w-full">
      <GeneralCategory v-if="!!items" :items="items" />
      <FooterSection />
  </loading-indicator>

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
  useRouter
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
    const { result , loading } = useQuery<ChildCategoriesBySlugQuery>(
      CHILDCATBYSLUG,
      variable
      )
      
      // $mitt.on('languageSwitched', () => {
        //   router.push({
          //     path: localePath('/categories'),
          //     params: {
            //       id: result.value!.category!.translation!.id,
            //     },
            //   })
            // })
            
            function getLink(id : string){
              
              const  action  =  route.value.query.action  as string | undefined

              if(action === undefined || action === '' ){
               return localePath( '/category-with-category/' + id )
              }else{
                return localePath( '/category-with-category/' + id) 
              }

            }

    return {
      loading,
      items: computed(() => {
        return result.value?.category?.children?.edges?.map((i) => ({
          title: i?.node?.name,
          excerpt: i?.node?.description,
          link: + getLink(i!.node!.id),
          image : i?.node?.cat_cf?.image?.sourceUrl || ''
        }))
      }),
    }
  },
})
</script>
