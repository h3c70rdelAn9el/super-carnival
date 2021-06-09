<template>
  <SolidLayout>
    <div class="min-h-screen pb-10 mt-8 bg-gray-300">
      <div class="pt-4 mb-4 text-3xl tracking-wider text-center font-shadows">Portfolio</div>
      <ClientOnly>
        <lightbox :images="images" class="p-2"></lightbox>
      </ClientOnly>  
    </div>
  </SolidLayout>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: require('../assets/images/1.jpg'),
          caption: 'Image 1',
        },
        {
          src: require('../assets/images/foto-pettine-IfjHaIoAoqE-unsplash.jpg'),
          caption: 'Le Image 2',
        },
        {
          src: require('../assets/images/sofia-hernandez-8cCfjxR8KTw-unsplash.jpg'),
          caption: 'le Image tres',
        },
        {
          src: require('../assets/images/nathan-dumlao-5BB_atDT4oA-unsplash.jpg'),
          caption: 'le Image tres',
        },
      ],
    }
  },
}
</script>

<style>
.lightbox-overlay {
  margin-top: 36px;
  
}

.holder {
  padding-top: 50px;
}
</style>
