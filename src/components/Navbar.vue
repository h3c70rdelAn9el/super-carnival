<template>
  <nav class="flex flex-row justify-between z-40 bg-pink-400 w-full fixed top-0">
    <div>
      <NavbarModal />
    </div>
    <div class="text-center text-3xl text-gray-800">
      <strong>
        <g-link to="/">
        <!-- <img src="../assets/images/LogoMakr-2bCkpf.png" alt="logo" class="w-32"> -->
          <!-- <g-image scr="../assets/images/LogoMakr-2bCkpf.png"></g-image> -->
        </g-link>
      </strong>
    </div>
    <div class="w-10">
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavbarModal from '@/components/NavbarModal'

export default {
  components: {
    NavbarModal
  }
}
</script>
