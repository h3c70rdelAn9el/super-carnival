<template>
  <SolidLayout>
    <div class="relative h-80 pt-2">
      <div class="absolute top-2/3 sm:top-40 left-0 right-0">
        <div class="flex flex-col opacity-75">
          <div
            class="bg-pink-400 text-center  mx-auto -mt-32 sm:-mt-12 px-10 rounded-md shadow-lg py-4"
          >
            <p class="text-3xl font-shadows tracking-wider">Meet Erin!</p>
          </div>
        </div>
      </div>
      <parallax
        :speed-factor="0.6"
        breakpoint="(min-width: 80px)"
        class="p-container"
      >
        <g-image class="opacity-80" src="../assets/images/field.jpg" />
      </parallax>
    </div>
    <section class="text-center bg-gray-200 px-14 pb-2">
      <h2 class="text-2xl font-shadows tracking-wider pt-2 mb-3">About Me</h2>
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
