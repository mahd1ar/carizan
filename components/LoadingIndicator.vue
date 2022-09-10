<template>
  <transition name="fade">
    <div v-if="isLoading" class="m-2">
      <div class="w-full p-4 flex-center rounded-lg text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
            <animateTransform
              attributeName="transform"
              calcMode="discrete"
              dur="2.4s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;90 12 12;180 12 12;270 12 12"
            />
            <animate
              attributeName="opacity"
              dur="0.6s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="1;1;0"
            />
          </circle>
          <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
            <animateTransform
              attributeName="transform"
              begin="0.2s"
              calcMode="discrete"
              dur="2.4s"
              repeatCount="indefinite"
              type="rotate"
              values="30 12 12;120 12 12;210 12 12;300 12 12"
            />
            <animate
              attributeName="opacity"
              begin="0.2s"
              dur="0.6s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="1;1;0"
            />
          </circle>
          <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
            <animateTransform
              attributeName="transform"
              begin="0.4s"
              calcMode="discrete"
              dur="2.4s"
              repeatCount="indefinite"
              type="rotate"
              values="60 12 12;150 12 12;240 12 12;330 12 12"
            />
            <animate
              attributeName="opacity"
              begin="0.4s"
              dur="0.6s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="1;1;0"
            />
          </circle>
        </svg>
      </div>
    </div>
    <slot v-else></slot>
  </transition>
</template>

<script lang="ts" setup>
defineProps({
  isLoading: { type: Boolean, required: true },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
