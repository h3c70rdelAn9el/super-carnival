<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <slot/>
    <Footer />
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
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import '../assets/css/main.css';

</style>
