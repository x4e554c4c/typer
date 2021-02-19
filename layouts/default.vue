<template>
  <div class="layout-default">
    <navbar-desktop/>
    <Nuxt />
  </div>
</template>

<script>
import {Observer as Resolution} from '@/services/Resolution'

export default {
  provide() {
    return {
      '$resolution': this.resolution
    }
  },

  data() {
    return {
      resolution: null
    }
  },

  watch: {
    resolution(value) {
      console.log(value);
    }
  },

  mounted() {
    let watcher = new Resolution();
    watcher.bind(value => this.resolution = value);
  }
}
</script>