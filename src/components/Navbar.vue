<template>
  <nav class="flex flex-row justify-between z-40 bg-pink-400 w-full fixed top-0">
    <div>
      <NavbarModal />
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
