<template>
  <div class="layout flex flex-col justify-between">
    <header class="header">
      <Navbar class="opacity-75" />
    </header>
    <slot class="mb-auto" />
    <Footer class=""/>
  </div>
</template>


<div class="flex flex-col h-screen">
    <div class="bg-red-500">header</div>
    <div class="bg-green-500 flex-grow">content</div>
    <div class="bg-blue-500">footer</div>
</div>

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
