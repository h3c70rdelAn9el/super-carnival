<template>
  <SolidLayout>
    <div class="relative pt-2 h-80">
      <div class="absolute left-0 right-0 top-2/3 sm:top-40">
        <div class="flex flex-col opacity-75">
          <div
            class="px-10 py-4 mx-auto -mt-32 text-center bg-pink-400 rounded-md shadow-lg sm:-mt-12"
          >
            <p class="text-3xl tracking-wider font-shadows">Meet Erin!</p>
          </div>
        </div>
      </div>
      <ClientOnly>
        <parallax
          :speed-factor="0.6"
          breakpoint="(min-width: 80px)"
          class="p-container"
        >
          <g-image class="opacity-80" src="../assets/images/field.jpg" />
        </parallax>
      </ClientOnly>
    </div>
    <section class="pb-2 text-center bg-gray-200 px-14">
      <h2 class="pt-2 mb-3 text-2xl tracking-wider font-shadows">About Me</h2>
      <div class="mx-16">
        <p class="mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nostrum
          esse a laudantium repellat culpa et nemo possimus mollitia quas?
        </p>
        <hr class="border border-red-900" />
        <p class="my-3">
          Numquam ut modi, debitis error est ea quae nulla laudantium ad
          quibusdam, vitae totam quis! Maiores non quis dolorem cum minus
          pariatur!
        </p>
        <hr class="border border-red-900" />
        <p class="my-3">
          Possimus, eligendi, cumque eum labore fuga reiciendis placeat
          consectetur sed obcaecati rerum accusamus recusandae error natus id
          dolore excepturi minus dolorum dignissimos nesciunt molestias dolor
          fugit architecto ipsa magnam? Sit possimus maxime corrupti omnis
          adipisci quas?
        </p>
      </div>
    </section>
    <!-- </div> -->
  </SolidLayout>
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
.p-container img {
  height: 500px !important;
}
</style>
