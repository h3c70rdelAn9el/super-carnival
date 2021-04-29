<template>
  <Layout>
    <div class="bg-gray-300 h-full mt-8">
      <div class="mb-4 text-center text-2xl pt-4">Portfolio</div>
      <lightbox :images="images" title="" class=""></lightbox>
    </div>
  </Layout>
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
