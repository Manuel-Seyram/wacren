<script setup>
</script>
<template>
  <main class="xl:w-1/2 px-2 xl:px-0 mx-auto">
    <div class="xl:h-12 px-5 xl:px-0 text-center">
      <p class="font-nunito text-sm text-gray-400 tracking-wider">
        159F 9CB0 8AA7 EBA9 457B 2A71 D86D 6F23 812E 0297
      </p>
    </div>
    <div class="xl:flex gap-10">
      <div>
        <h1 class="mt-2 font-nunito font-bold text-2xl">About Us</h1>
        <h1
          class="text-right mt-2 font-nunito font-bold text-2xl text-blue-600"
        >
          Contact Us
        </h1>
        <div class="mt-5 h-full mx-auto px-5 xl:px-0">
          <p class="font-nunito text-base mb-5">
            Contact details for the WACREN CSIRT. The preferred method for
            contacting the CSIRT is via e-mail.
          </p>
          <label class="font-nunito text-base" for="email">E-mail:</label>
          <p
            class="underline mb-5 mt-2 font-nunito text-base pl-5 text-blue-600"
          >
            cert@wacren.net
          </p>
          <label class="font-nunito text-base" for="email">PGP KeyID:</label>
          <p
            class="underline mb-5 mt-2 font-nunito text-base pl-5 text-blue-600"
          >
            0xD86D6F23812E0297
          </p>
          <label class="font-nunito text-base" for="email">Telephone:</label>
          <p class="mt-2 mb-5 font-nunito text-base pl-5 text-blue-600">
            +233 302942873 | +229 94 09 63 12 | +226 75 82 26 86
          </p>
          <label class="font-nunito text-base" for="email">Adress:</label>
          <p class="mt-2 mb-5 font-nunito text-base pl-5">
            WACREN CSIRT WACREN NOC Team VCG Office Complex, IPS Road P O Box LG
            1279, Accra, Ghana
          </p>
          <label class="font-nunito text-base" for="email">Time Zone:</label>
          <p class="mt-2 mb-5 font-nunito text-base pl-5">
            Accra/Ghana ; Time Zone. GMT (Greenwich Mean Time) or Coordinated
            Universal Time (UTC)
          </p>
        </div>
      </div>
      <div class="xl:w-1/2">
        <div class="border h-12">
          <div class="flex justify-around py-3 text-center">
            <p class="font-nunito font-bold">Contact Us:</p>
            <router-link to="mailto:cert@wacren.net"
              ><p class="underline text-blue-600">
                <span><i class="bi bi-envelope-at text-black"></i></span>
                cert@wacren.net
              </p></router-link
            >
          </div>
        </div>
        <div class="border h-10 mt-7">
          <div class="flex justify-around py-2 text-center">
            <p class="font-nunito font-bold">CSIRT:</p>
            <p class="underline text-blue-600">0xD86D6F23812E0297</p>
          </div>
        </div>
        <div class="border h-24 mt-7">
          <div class="flex gap-2 py-7 px-2">
            <img src="../assets/tba.png" alt="tba" class="h-10" />
            <img src="../assets/first.png" alt="first" class="h-10" />
            <img src="../assets/opencsirt.png" alt="opencsirt" class="h-10" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
