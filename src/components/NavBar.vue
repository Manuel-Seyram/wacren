<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

let open = ref(false);
const tab = ref(false);
const tabSecond = ref(false);

const clickedTab = () => {
  tab.value = !tab.value;
  tabSecond.value = false;
};
const clickedtabSecond = () => {
  tabSecond.value = !tabSecond.value;
  tab.value = false;
};
function Menu() {
  open.value = !open.value;
}

const handleClickOutside = (event) => {
  if (!event.target.closest(".dropdown")) {
    tab.value = false;
    tabSecond.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="mx-auto relative">
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

        <div class="dropdown relative">
          <li @click="clickedTab" class="mb-3 mx-5 cursor-pointer">
            <a
              class="text-blue-600 hover:text-blue-800 font-nunito"
              active-class="active"
              >News <i class="bi bi-caret-down-fill"></i
            ></a>
          </li>
          <div
            v-show="tab"
            class="border h-10 w-24 xl:absolute mx-5 xl:mx-0 bg-white"
          >
            <router-link to="#">
              <li class="mx-4 mt-1">
                <a
                  class="text-blue-600 hover:text-blue-800 font-nunito"
                  active-class="active"
                  >Articles</a
                >
              </li>
            </router-link>
          </div>
        </div>

        <div class="dropdown relative">
          <li @click="clickedtabSecond" class="mb-3 mx-5 cursor-pointer">
            <a
              class="text-blue-600 hover:text-blue-800 font-nunito"
              active-class="active"
              >About Us<i class="bi bi-caret-down-fill"></i
            ></a>
          </li>
          <div
            v-show="tabSecond"
            class="border h-16 w-32 xl:absolute mx-5 xl:mx-0 bg-white"
          >
            <router-link to="/rfc-2350">
              <li class="mx-4 mt-1">
                <a
                  class="text-blue-600 hover:text-blue-800 font-nunito"
                  active-class="active"
                  >RFC2350
                </a>
              </li>
            </router-link>
            <router-link to="/contact-us">
              <li class="mx-4 mt-1">
                <a
                  class="text-blue-600 hover:text-blue-800 font-nunito"
                  active-class="active"
                  >Contact Us</a
                >
              </li>
            </router-link>
          </div>
        </div>
      </ul>
    </header>
  </div>
</template>
