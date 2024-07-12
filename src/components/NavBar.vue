<script setup>
import { ref } from "vue";
let open = ref(false);

function Menu() {
  open.value = !open.value;
}
</script>
<template>
  <div class="mx-auto">
    <header
      class="bg-white text-black py-3.5 px-6 xl:px-0 xl:flex justify-between items-center xl:w-1/2 w-full z-10 mx-auto"
    >
      <div class="logo">
        <img
          class="xl:w-28 h-20 text-left"
          src="../assets/logo.png"
          alt="wacren"
        />
      </div>
      <span
        @click="Menu()"
        class="absolute xl:hidden right-6 top-1.5 cursor-pointer mt-7 xl:mt-0 text-4xl"
      >
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter']"> </i>
      </span>
      <ul
        class="links xl:flex md:items-center 2xl:px-0 px-3 xl:pb-0 pb-10 xl:static absolute bg-white xl:w-auto w-full top-15"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <router-link to="/"
          ><li class="mb-3 mx-5">
            <a
              class="text-blue-600 hover:text-blue-800 font-nunito"
              active-class="active"
              >Home</a
            >
          </li></router-link
        >
        <router-link to="/services">
          <li class="mb-3 mx-5">
            <a
              class="text-blue-600 hover:text-blue-800 font-nunito"
              active-class="active"
              >Services</a
            >
          </li>
        </router-link>
        <li class="mb-3 mx-5">
          <a
            href="/about-us"
            class="text-blue-600 hover:text-blue-800 font-nunito"
            active-class="active"
            >About Us</a
          >
        </li>
      </ul>
    </header>
  </div>
</template>
