<template>
  <Layout>
    <div class="relative h-screen">
      <div class="absolute top-72 left-0 right-0">
        <div class="flex flex-col opacity-75">
          <div
            class="bg-pink-400 text-center  mx-auto px-20 rounded-md shadow-lg py-4"
          >
            <img src="../assets/images/LogoMakr-2bCkpf.png" alt="" class="w-52 mx-auto">
            <p class="text-3xl font-shadows tracking-wider">Welcome to my Portrait Studio</p>
          </div>
        </div>
      </div>
      <parallax
        :speed-factor="0.4"
        breakpoint="(min-width: 80px)"
        class="p-container"
      >
        <img
          class="h-full opacity-80"
          src="../assets/images/sofia-hernandez-8cCfjxR8KTw-unsplash.jpg"
        />
      </parallax>
    </div>
    <section class="h-full flex flex-col mx-auto sm:flex-row">
      <div class="text-center mx-auto w-1/2 p-4 ">
        <div class="font-shadows tracking-wider mt-3 ">
          <h2 class="text-xl">Custom Photography</h2>
          <h2 class="mb-4">At your service</h2>
        </div>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          atque impedit obcaecati commodi fugit ipsa.
        </p>
        <hr class="border border-black" />
        <p class="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <hr class="border border-black" />
        <p class="my-4">
          Tempora quidem rem modi assumenda in praesentium. Odit, assumenda soluta tempora incidunt earum voluptatem repellendus aliquid omnis eaque.
        </p>
        <button
          class="bg-coral p-2 rounded-md shadow-lg hover:bg-gray-500 hover:text-gray-200"
        >
          Book Now
        </button>
      </div>
      <div
        class="text-center mb-2 border border-black rounded-md mx-auto w-1/2"
      >
        <g-image
          src="../assets/images/kinga-cichewicz-HHw9lc0ogIs-unsplash.jpg"
          class="h-full rounded-md object-cover p-4"
        ></g-image>
      </div>
    </section>
    <section
      class="flex items-center justify-center h-screen bg-fixed bg-center bg-cover parallax-bottom-container relative opacity-75"
      style="background-image: ('../assets/images/vitor-pinto-3bAJYaK37yE-unsplash.jpg')"
    >
      <div
        class="p-3 w-1/2 text-black bg-purple-300 bg-opacity-60 rounded-xl shadow-md hover:bg-gray-500 hover:bg-opacity-80"
      >
        <g-link to="/portfolio" class="mx-auto ">
          <div>
            <h2 class="text-center text-2xl mb-2 font-shadows tracking-wider">Portfolio</h2>
            <p class="text-sm p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, accusantium numquam quia praesentium ratione neque
              soluta. Doloribus, voluptates iusto! Numquam.
            </p>
          </div>
        </g-link>
      </div>
    </section>
    <section class="bg-gray-200 p-5 w-full h-full">
      <div class="m-4 text-center">
        <p class="m-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut,
          repudiandae nisi ullam ratione tempora ea illum impedit quidem libero.
        </p>
        <hr class="border border-black" />
        <p class="m-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          cupiditate sunt voluptate vero suscipit. Porro id natus ad!
          Perferendis aut laudantium quibusdam commodi numquam nemo sed, maiores
          voluptate consequatur unde delectus temporibus tenetur vel
          necessitatibus aliquid cumque pariatur maxime! Libero!
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax,
  },
}
</script>

<style>
.parallax-bottom-container {
  position: relative;
  background-image: url('../assets/images/vitor-pinto-3bAJYaK37yE-unsplash.jpg');
}

.parallax-bottom-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
}

.p-container {
  height: 100vh !important;
}

.g-image {
  border-radius: 20px;
}
</style>
