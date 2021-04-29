<template>
  <div>
    <button @click="display = !display">
      Menu
    </button>
    <transition name="block">
      <div v-if="display" class=" h-screen w-screen  fixed  top-0">
        <div class="w-screen h-screen absolute top-0 z-10 bg-black">
          <button class="bg-coral text-black w-6 rounded-md" @click="display = false">
            x
          </button>
          <div class="flex flex-col h-full">
            <div class="border border-coral rounded-lg p-2 px-8 mx-auto my-auto text-center text-xl">
              <div v-for="(link, id) in links" :key="id" class="w-24">
                <g-link :to="link.route" class="block px-2 py-1 text-coral rounded hover:bg-gray-800">
                  <p>
                    {{ link.name }}
                  </p>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      display: false,
      links: [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Portfolio',
          route: '/portfolio'
        },
        {
          name: 'Contact',
          route: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
.block-enter {
  opacity: 0;
}

.block-enter-active {
  animation: slide-in .5s ease-out forwards;
  transition: opacity .5s;
}

.block-leave {
  opacity: 1;
}

.block-leave-active {
  animation: slide-out .2s ease-out forwards;
  transition: opacity .2s;
  opacity: 1;
}

@keyframes slide-in {
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25px);
  }
}

</style>
