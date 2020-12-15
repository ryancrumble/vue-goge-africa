<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/common/Navbar.vue'

export default Vue.extend({
  name: 'BaseLayout',
  components: { Navbar },
})
</script>

<style lang="postcss" scoped>
.container {
  @apply mx-auto w-5/6 py-12;
}
</style>
