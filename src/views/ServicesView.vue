<script setup>
import TheContentContainer from "@/components/shared/TheContentContainer.vue";
</script>
<template>
  <main class="xl:w-1/2 px-2 xl:px-0 mx-auto">
    <div class="xl:h-12 px-5 xl:px-0 text-center">
      <p class="font-nunito text-sm text-gray-400 tracking-wider">
        159F 9CB0 8AA7 EBA9 457B 2A71 D86D 6F23 812E 0297
      </p>
    </div>
    <h1
      class="mt-10 font-nunito font-bold text-2xl uppercase text-blue-600 text-center xl:text-left"
    >
      SERVICES
    </h1>

    <div class="mt-5 h-full mx-auto px-5 xl:px-0">
      <div class="xl:h-12 px-5 xl:px-0">
        <p class="font-nunito text-base tracking-wider">
          At the actual state, WACREN CSIRT offers its constituency the
          following “Reactive” and “Proactive” services.
        </p>
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
