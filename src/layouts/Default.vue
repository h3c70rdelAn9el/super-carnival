<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import '../assets/css/main.css';

</style>
