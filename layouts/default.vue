<template>
  <main
    dir="rtl"
    class="relative flex items-start justify-center min-h-screen bg-gray-100 sm:pt-0"
  >
    <div
      v-if="showDevBox"
      :style="`
      position: fixed;
      top: 200px;
      left: 20px;
      background: white;
      direction: ltr;
      z-index : 200;
      opacity: 0.4;
    `"
    >
      <div>quick navigatin for dev</div>
      <div style="background-color: red" class="text-white text-xs">
        this will not show in production
      </div>
      <div>
        <button @click="changeLocal">change local [{{ locale }}]</button>
      </div>
      <ul>
        <!-- <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/">home</nuxt-link>
        </li> -->

        <!-- <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f2">f2</nuxt-link>
        </li>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f2-v2">f2 ver2</nuxt-link>
        </li>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f2-v3">f2 ver3</nuxt-link>
        </li> -->
      </ul>
    </div>
    <div class="w-full">
      <HeaderSection />

      <Nuxt ref="nuxt" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, useContext } from '@nuxtjs/composition-api'
import { onKeyStroke } from '@vueuse/core'

const showDevBox = ref(true)

onKeyStroke('m', (e) => {
  e.preventDefault()
  showDevBox.value = !showDevBox.value
})


const { i18n } = useContext()

console.log(i18n.defaultLocale)

const locale = ref(i18n.locale)

const changeLocal = () => {
  if (locale.value === 'fa') {
    i18n.setLocale('en')
    locale.value = 'en'
  } else {
    i18n.setLocale('fa')
    locale.value = 'fa'
  }
}

// watchEffect(() => {
//   if (shift.value && a.value)
// })
</script>
