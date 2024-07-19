<script setup>
import TheContentContainer from "@/components/shared/TheContentContainer.vue";
</script>
<template>
  <main class="xl:w-1/2 px-2 xl:px-0 mx-auto">
    <h1 class="mt-2 font-nunito font-bold text-2xl">
      West and Central African Research and Education Network
    </h1>
    <h1 class="text-right mt-2 font-nunito font-bold text-2xl text-blue-600">
      Computer Security Incident Response Team
    </h1>
    <div class="mt-5 h-full mx-auto px-5 xl:px-0">
      <div class="xl:h-12 px-5 xl:px-0 text-center">
        <p class="font-nunito text-sm text-gray-400 tracking-wider">
          159F 9CB0 8AA7 EBA9 457B 2A71 D86D 6F23 812E 0297
        </p>
      </div>
      <div class="border mt-5 xl:h-20 rounded-md">
        <div class="xl:flex justify-around py-5 text-center">
          <p class="font-nunito font-bold">Contact Us:</p>
          <router-link to="mailto:cert@wacren.net"
            ><p class="underline text-blue-600">
              <span><i class="bi bi-envelope-at text-black"></i></span>
              cert@wacren.net
            </p></router-link
          >
          <p class="underline text-blue-600">0xD86D6F23812E0297</p>
        </div>
      </div>
      <div class="border mt-5 h-24 grid place-items-center rounded-md">
        <div class="flex xl:gap-20 gap-2">
          <img src="../assets/tba.png" alt="tba" class="xl:h-20 h-8" />
          <img src="../assets/first.png" alt="first" class="xl:h-20 h-8" />
          <img
            src="../assets/opencsirt.png"
            alt="opencsirt"
            class="xl:h-20 h-8"
          />
        </div>
      </div>
      <div class="mt-7 grid :grid-cols-3 gap-5">
        <!--Awareness-->
        <TheContentContainer
          title="Awareness"
          description=" WACREN CSIRT participates in any awareness campaign from
              TrustBroker Africa(TBA) and directly to its constituency at other
              times."
        />

        <!--Alerts and Warnings-->
        <TheContentContainer
          title="Alerts and Warnings"
          description=" This service consists of the publication of information describing an attack, an alert, a threat, etc. and the provision of short-term action recommendations that allow it to face the problem."
        />
        <!--Incident Handling -->
        <TheContentContainer
          title="Incident Handling "
          description=" The service entails managing and mitigating security incidents."
        />
      </div>
    </div>
  </main>
</template>
