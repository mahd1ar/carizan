<template>
  <header
    dir="ltr"
    class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full py-4 bg-gray-100 shadow-lg sticky top-0"
  >
    <!-- mobile nav -->
    <transition name="fade">
      <nav
        v-if="showMobileMenu"
        class="mobile-nav fixed w-full h-full z-20 bg-gradient-to-tr from-black to-gray-900/90 top-0 flex flex-col justify-center items-start"
      >
        <button
          class="right-4 top-5 absolute text-white"
          @click="showMobileMenu = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <ul class="text-primary flex flex-col left-10 text-3xl relative">
          <li
            v-for="(i, index) in navItems"
            :key="i.id"
            @click="showMobileMenu = false"
            class="py-4 px-2"
            v-motion
            :initial="{
              scale: 1.5,
              y: 100, //* ( index % 2 === 0 ? 1 : -1),
              opacity: 0,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
                delay: index * 70,
              },
            }"
          >
            <nuxt-link :to="i.link" v-text="i.label"></nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>

    <nav
      class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <a
          class="inline-flex gap-x-2 text-xl font-semibold text-black items-end"
          href="#"
        >
          <div class="w-12 rounded aspect-square flex-center flex-shrink-0">
            <svg
              class="object-contain text-black w-10"
              viewBox="0 0 692.74 667.87"
            >
              <g>
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="fill-current"
                    d="M498.44,263.59A193.48,193.48,0,0,0,404.28,288l-.11-.22a109.88,109.88,0,1,1,44.48-133.64l78.56-31A193.25,193.25,0,0,0,346.38,0C239.24,0,152,87.18,152,194.36a193.15,193.15,0,0,0,13.58,71.13C72,279.4,0,360.24,0,457.65,0,562.52,83.43,648.13,187.41,651.81v-84.5A109.87,109.87,0,1,1,303.88,450.54V527.8h84.84V450.54h.15a109.85,109.85,0,1,1,116.48,117V652c103.94-3.66,187.39-89.31,187.39-194.15,0-107.1-87.14-194.28-194.3-194.28"
                  />
                  <path
                    class="fill-current"
                    d="M471.77,567.39a12.26,12.26,0,0,1-24.15-.07h-8.4a12.3,12.3,0,0,1-24.23,0l-8.4-.07a12.28,12.28,0,0,1-24.23,0H374a12.25,12.25,0,0,1-24.21-.13H341.4a12.26,12.26,0,0,1-24.24-.07h-8.35a12.27,12.27,0,0,1-24.28-.05l-30.86-.06V550.46h-42.2v46.41h0a12.31,12.31,0,0,1,0,24.61h-.05v46.39h42.2V651.44h30.9a12.3,12.3,0,0,1,24.23,0h8.36a12.29,12.29,0,0,1,24.21,0h8.42a12.29,12.29,0,0,1,24.21,0h8.38a12.3,12.3,0,0,1,24.23,0H415a12.3,12.3,0,0,1,24.23,0h8.35a12.38,12.38,0,0,1,12.17-10.16,12.23,12.23,0,0,1,12,10.16h10.46V567.39Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div class="leading-5">Carizan Pich Gostar</div>
        </a>
        <div class="sm:hidden">
          <button
            type="button"
            @click="showMobileMenu = true"
            class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              class="hs-collapse-open:block hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block h-full"
      >
        <div
          class="desktop-nav flex flex-col mt-5 h-full sm:flex-row-reverse sm:items-center sm:justify-start sm:mt-0 sm:pl-5 bg-gray-100"
        >
          <div class="text-gray-900 mx-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
              />
            </svg>
          </div>
          <nuxt-link
            :to="localePath('/')"
            class="font-bold h-full flex-center px-3 text-primary-dark hover:text-gray-500 bg-primary rounded-sm"
          >
          
            خانه
          </nuxt-link>

          <nuxt-link
            v-for="i in navItems"
            :key="i.id"
            :to="localePath(i.link)"
            v-if="i.link !== '/'"
            class="font-bold h-full flex-center px-3 text-gray-900 hover:text-gray-500"
          >
            {{ i.label }}
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useContext, useStore, computed, ref } from '@nuxtjs/composition-api'
import { RootState } from '@/store/index'

const store = useStore<RootState>()
const { i18n } = useContext()

const showMobileMenu = ref(false)

const navItems = computed(() => {
  return (store.getters.navItems as RootState['navItem']).filter(
    (i) => i.lang === i18n.locale.toLowerCase()
  )
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: scale(0.95);
}

.desktop-nav .nuxt-link-exact-active {
  @apply relative;

  &::after {
    content: '';
    animation: example 250ms ease-out 0ms;
    animation-fill-mode: forwards;
    // animation-play-state: running;
    // w-9/12
    @apply absolute transition-all ease-out border-primary border-b-4 rounded bottom-0;
  }
}

//
@keyframes example {
  from {
    width: 0%;
  }

  to {
    width: 75%;
  }
}

.mobile-nav .nuxt-link-exact-active {
  @apply relative flex items-center gap-2 flex-row-reverse justify-end;

  &::after {
    content: '';
    @apply transition-all ease-out border-primary-light w-6 border-b-4 rounded;
  }
}
</style>
