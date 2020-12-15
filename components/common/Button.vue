<template>
  <button class="btn" type="button" v-on="$listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  props: {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
})
</script>

<style lang="postcss" scoped>
.container {
}

.btn {
  @apply h-14 w-40 font-sans rounded-full py-3 px-4 mx-1 cursor-pointer outline-none text-sm whitespace-nowrap;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);

  &:hover {
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.3);
  }

  &:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
}

.btn-primary {
  @apply text-white bg-gradient-to-r from-primary to-secondary hover:from-yellow-300 hover:to-yellow-300;
}

.btn-secondary {
  @apply bg-secondary-lightest text-primary;

  &:hover {
    @apply bg-secondary-light text-primary-dark;
  }
}

.btn-tertiary {
  @apply bg-white text-primary;

  &:hover {
    @apply bg-secondary-lightest;
  }
}
</style>
