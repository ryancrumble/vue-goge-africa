<template>
  <div class="Navbar">
    <div class="Navbar__logo">
      <img src="@/assets/images/logo.png" alt="Goge Africa" class="w-40" />
    </div>
    <div class="Navbar__links">
      <div v-for="(link, n) in navLinks" :key="n">
        <a href="`${link.path}`" :class="{ active: isActive }">{{
          link.text
        }}</a>
      </div>
    </div>
    <div class="Navbar__actions">
      <img src="@/assets/images/icons/icon_cart.png" class="w-8 inline-block" />
      <Button class="btn-primary">Be a Contributer</Button>
      <Button class="btn-primary">Log in</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from './Button.vue'

export default Vue.extend({
  name: 'Navbar',
  components: { Button },
  data: () => {
    return {
      navLinks: [
        {
          text: 'Home',
          path: '/',
          isActive: true,
        },
        {
          text: 'Courses',
          path: '/courses',
        },
        {
          text: 'Blog',
          path: '/blog',
        },
        {
          text: 'About',
          path: '/about',
        },
        {
          text: 'Contact Us',
          path: '/contact',
        },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.Navbar {
  @apply w-full flex h-28 justify-between items-center;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
}

.Navbar__logo {
  @apply pl-16 pr-24 flex;
}

.Navbar__links {
  @apply flex-1 px-12 flex items-center justify-between;

  & a {
    @apply text-secondary font-sans;
    font-size: 18px;
  }

  & .active {
    @apply font-bold;
  }
}

.Navbar_actions {
  @apply pr-4 flex items-center justify-between;
}
</style>
