<template>
  <SolidLayout>
    <div class="pt-2 mt-8 contact">
      <div class="relative h-80">
        <div class="absolute left-0 right-0 top-2/3 sm:top-40">
          <div class="flex flex-col opacity-75">
            <div
              class="px-10 py-4 mx-auto -mt-32 text-center bg-pink-400 rounded-md shadow-lg sm:-mt-12"
            >
              <p class="text-3xl tracking-wider font-shadows">
                {{ pageTitle }}
              </p>
            </div>
          </div>
        </div>
        <ClientOnly>
          <parallax
            :speed-factor="0.5"
            breakpoint="(min-width: 80px)"
            class="p-container"
          >
            <g-image
              class="opacity-80"
              src="../assets/images/ranurte-SykNC3DC630-unsplash.jpg"
            />
          </parallax>
        </ClientOnly>
      </div>

      <div class="pt-4 bg-gray-300">
        <div class="mx-16">
          <form class="w-full">
            <div class="flex flex-wrap mb-6 -mx-3">
              <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Pablo"
                />
              </div>
              <div class="w-full px-3 md:w-1/2">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Picasso"
                />
              </div>
            </div>
            <div class="flex flex-wrap mb-6 -mx-3">
              <div class="w-full px-3">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="email"
                >
                  E-mail
                </label>
                <input
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="pablopicasso@artmail.com"
                />
              </div>
            </div>
            <div class="flex flex-wrap mb-6 -mx-3">
              <div class="w-full px-3">
                <label
                  class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class="block w-full h-48 px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  placeholder="blah blah blah..."
                ></textarea>
              </div>
            </div>
            <div class="flex">
              <button
                class="px-4 py-2 mx-auto mb-4 font-bold text-yellow-900 transition duration-200 ease-in-out rounded shadow hover:bg-gray-400 focus:shadow-outline focus:outline-none"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </SolidLayout>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  data() {
    return {
      pageTitle: 'Get in Touch!',
    }
  },
  components: {
    Parallax,
  },
}
</script>

<style>
.p-container img {
  height: 100vh !important;
}
</style>
