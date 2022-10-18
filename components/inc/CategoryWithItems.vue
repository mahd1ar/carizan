<template>
      <div>
    <div class="h-[400px] w-full overflow-hidden relative bg-black">
      <img
        v-if="pageInfo.image"
        class="w-full h-full object-cover"
        :src=" pageInfo.image "
        alt=""
      />
     
      <!-- overlay -->
      <div class="absolute top-0 left-0 z-10 w-full h-full">
        <div class="flex items-center h-full">
          <div
            class="bg-black h-full w-full"
            style="clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)"
          >
            <div class="container h-full">
              <div class="w-4/12 flex flex-col justify-center h-full">
                <h1 class="text-white text-6xl font-bold">
                  {{ pageInfo.title }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container my-10">
        
        <p class="leading-8 text-lg text-gray-700" v-html="pageInfo.description">
        </p>
      </div>
    </div>

    <ShoppingCards :cards="items" />
    <!-- <FooterSection /> -->
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const {items = [] , pageInfo = { image : '', title : '' , description : '' }} = defineProps({
    items : {
        type : Array  as PropType<{
            id : string,
            image : string,
            link : string,
            title : string,
            body : string
        }[]>
    },
    pageInfo :  {
        type : Object as PropType<{
            image : string,
            title : string,
            description : string
        }>
    }
})
</script>