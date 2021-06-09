<template>
  <Layout>
    <div class="relative">
      <div class="absolute flex sm:inset-1/4 inset-20">
        <div class="flex flex-col m-auto opacity-75">
          <div
            class="px-10 py-4 m-auto text-center bg-pink-400 rounded-md shadow-lg sm:px-20"
          >
            <img
              src="../assets/images/LogoMakr-2bCkpf.png"
              alt=""
              class="mx-auto w-52"
            />
            <p class="text-2xl tracking-wider sm:text-3xl font-shadows">
              Welcome to my Portrait Studio
            </p>
          </div>
        </div>
      </div>
      <ClientOnly>
        <parallax
          :speed-factor="0.4"
          breakpoint="(min-width: 80px)"
          class="p-container"
        >
          <g-image
            class=" opacity-80"
            src="../assets/images/sofia-hernandez-8cCfjxR8KTw-unsplash.jpg"
          />
        </parallax>
      </ClientOnly>
    </div>
    <section class="flex flex-col h-full mx-auto sm:flex-row">
      <div class="w-1/2 p-4 mx-auto text-center ">
        <div class="tracking-wider font-shadows">
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
          Tempora quidem rem modi assumenda in praesentium. Odit, assumenda
          soluta tempora incidunt earum voluptatem repellendus aliquid omnis
          eaque.
        </p>
        <button
          class="p-2 rounded-md shadow-lg bg-coral hover:bg-gray-500 hover:text-gray-200"
        >
          Book Now
        </button>
      </div>
      <div
        class="w-1/2 mx-auto mb-2 text-center border border-black rounded-md"
      >
        <g-image
          src="../assets/images/kinga-cichewicz-HHw9lc0ogIs-unsplash.jpg"
          class="object-cover h-full p-4 rounded-md"
        ></g-image>
      </div>
    </section>
    <section
      class="relative flex items-center justify-center h-screen bg-fixed bg-center bg-cover opacity-75 parallax-bottom-container"
      style="background-image: ('../assets/images/vitor-pinto-3bAJYaK37yE-unsplash.jpg')"
    >
      <div
        class="w-1/2 p-3 text-black bg-purple-300 shadow-md bg-opacity-60 rounded-xl hover:bg-gray-500 hover:bg-opacity-80"
      >
        <g-link to="/portfolio" class="mx-auto ">
          <div>
            <h2 class="mb-2 text-2xl tracking-wider text-center font-shadows">
              Portfolio
            </h2>
            <p class="p-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, accusantium numquam quia praesentium ratione neque
              soluta. Doloribus, voluptates iusto! Numquam.
            </p>
          </div>
        </g-link>
      </div>
    </section>
    <section class="w-full h-full p-5 bg-gray-200">
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
