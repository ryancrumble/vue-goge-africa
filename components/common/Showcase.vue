<template>
  <div class="Showcase">
    <img
      class="Showcase-image"
      src="@/assets/images/showcase.png"
      alt="showcase-img"
    />
    <div class="Showcase-content">
      <h1>
        Get Access to Unlimited Educational Resources. Everywhere, Everytime!
      </h1>
      <h2>
        premium access to more than 10,000 resources ranging from courses,
        events e.t.c.
      </h2>
      <Button class="Showcase-button btn-secondary">Get Access</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from './Button'

export default Vue.extend({ name: 'Showcase', components: { Button } })
</script>

<style lang="postcss" scoped>
.Showcase {
  width: 100%;
  height: 700px;
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);

  & .Showcase-image {
    @apply absolute;
    left: 55%;
    top: 6.5rem;
  }
}

.Showcase-content {
  @apply ml-44 pt-32;
  margin-right: 45%;

  & h1 {
    @apply font-extrabold text-secondary-lightest;
    font-size: 44px;
    line-height: 70px;
    margin-bottom: 1.8rem;
  }

  & h2 {
    @apply text-secondary-lightest;
    font-size: 18px;
    line-height: 33px;
    margin-bottom: 1.125rem;
  }
}

@screen xl {
  .Showcase-content {
    @apply pt-16;
    & h1 {
      @apply text-4xl;
      line-height: 3.5rem;
    }
  }
}

@screen lg {
  .Showcase-content {
    & h1 {
      @apply text-3xl;
      line-height: 3rem;
    }

    & h2 {
      @apply text-base;
      line-height: 1.5rem;
    }
  }
}

@screen md {
  .Showcase {
    /* FIXME: 100% minus heightOfNavBar */
    height: 86vh;
    & .Showcase-image {
      @apply hidden;
    }
  }

  .Showcase-content {
    @apply mx-24 pt-12 h-full;
    & button {
      @apply mx-auto;
    }
  }
}

@screen sm {
  .Showcase-content {
    @apply mx-16;
    & h1 {
      @apply text-2xl;
      line-height: 2.5rem;
    }

    & h2 {
      @apply text-sm mb-16;
    }
  }
}
</style>
