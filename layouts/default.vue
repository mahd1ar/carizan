<template>
  <main
    dir="rtl"
    class="relative flex items-start justify-center min-h-screen bg-gray-100 sm:pt-0"
  >
    <div
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
      <ul>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/">home</nuxt-link>
        </li>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f">f</nuxt-link>
        </li>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f2">f2</nuxt-link>
        </li>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f2-v2">f2 ver2</nuxt-link>
        </li>
        <li class="hover:bg-slate-800 hover:text-white">
          <nuxt-link class="inline-block w-full" to="/f2-v3">f2 ver3</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="w-full">
      <HeaderSection />

      <Nuxt />
    </div>
  </main>
</template>
