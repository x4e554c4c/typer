<template>
  <div class="layout-default">
    <navbar-desktop v-if="!!!$resolution.mobile"/>
    <Nuxt />
  </div>
</template>

<script>

export default {
}
</script>