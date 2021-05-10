<template>
  <SolidLayout>
    <div class="bg-gray-300 min-h-screen pb-10 mt-8">
      <div class="mb-4 text-center text-3xl font-shadows tracking-wider pt-4">Portfolio</div>
      <lightbox :images="images" class="p-2"></lightbox>
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
