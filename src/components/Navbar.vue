<template>
  <nav class="flex flex-row justify-between z-40 bg-coral opacity-75 w-full fixed top-0">
    <div>
      <NavbarModal />
    </div>
    <div class="text-center text-3xl text-gray-800">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
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
