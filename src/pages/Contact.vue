<template>
  <SolidLayout>
    <div class="contact mt-8 pt-2">
      <div class="relative h-80">
        <div class="absolute top-40 left-0 right-0">
          <div class="flex flex-col opacity-75">
            <div
              class="bg-pink-400 text-center  mx-auto -mt-32 sm:-mt-12 px-10 rounded-md shadow-lg py-4"
            >
              <p class="text-3xl font-shadows tracking-wider">
                {{ pageTitle }}
              </p>
            </div>
          </div>
        </div>
        <parallax
          :speed-factor="0.5"
          breakpoint="(min-width: 80px)"
          class="p-container"
        >
          <img
            class="opacity-80"
            src="../assets/images/ranurte-SykNC3DC630-unsplash.jpg"
          />
        </parallax>
      </div>

      <div class="bg-gray-300 pt-4">
        <div class="mx-16">
          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Frodo"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Baggins"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="frodobaggins@theshire.com"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  placeholder="blah blah blah..."
                ></textarea>
              </div>
            </div>
            <div class="flex">
              <button
                class="shadow hover:bg-gray-400 transition ease-in-out duration-200 focus:shadow-outline focus:outline-none text-yellow-900 font-bold py-2 px-4 rounded mx-auto mb-4"
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
  height: 500px !important;
}
</style>
