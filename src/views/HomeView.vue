<script setup></script>
<template>
  <main>
    <h1 class="text-center mt-2 font-nunito font-bold text-2xl">
      WACREN-CSIRT-CHARTER
    </h1>
    <h1 class="text-center mt-2 font-nunito font-bold text-2xl text-blue-600">
      WACREN CSIRT CHARTER RFC2350 DESCRIPTION
    </h1>
    <div class="mt-5 xl:w-1/2 h-full mx-auto px-5 xl:px-0">
      <div class="xl:h-12 px-5 xl:px-0">
        <p class="font-nunito text-base tracking-wider">
          This Charter defines the mission statement, constituency, sponsoring
          and affiliation, authority and services of WACREN’s Computer Security
          Incident Response Team (CSIRT).
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
        <div class="flex xl:gap-20 gap-10">
          <img src="../assets/tba.png" alt="tba" class="xl:h-20 h-10" />
          <img
            src="../assets/opencsirt.png"
            alt="opencsirt"
            class="xl:h-20 h-10"
          />
        </div>
      </div>
      <div class="mt-7 grid :grid-cols-3 gap-5">
        <!--Authority-->
        <div class="border rounded-md h-82">
          <div>
            <p class="text-center text-xl font-bold font-nunito">Authority</p>
            <p
              class="mt-2 text-base font-normal font-nunito px-5 mb-5 text-center"
            >
              WACREN supports interconnections and fosters collaboration between
              R&E institutions in the region and international peers by building
              and operating a world-class network infrastructure, developing
              state-of-the-art services, promoting collaboration among national,
              regional, and international R&E communities, and building the
              human capacity of the REN community. WACREN was constituted in
              2010, and membership is open to all 22 countries in the region. It
              currently has 13 participating National Research and Education
              Networks (NRENs) from Benin, Burkina Faso, Cameroon, Chad, Cote
              d’Ivoire, Gabon, Ghana, Guinea, Mali, Niger, Nigeria, Senegal, and
              Togo. WACREN deploys cloud-based infrastructure to ease
              technological challenges experienced by many of its members. The
              CSIRT has the authority to oversee and make recommendations
              regarding the incident mitigation domain. The CSIRT will execute
              its duties within the scope of this Charter, as informed by any
              applicable laws, regulations, directives, and any additional
              assignments of responsibility from external governance bodies.
            </p>
            <div class="h-10 bg-gray-200"></div>
          </div>
        </div>
        <!--constituency-->
        <div class="border rounded-md h-82">
          <div>
            <p class="text-center text-xl font-bold font-nunito">
              Constituency
            </p>
            <p
              class="mt-2 text-base font-normal font-nunito px-5 mb-5 text-center"
            >
              The primary constituency is the WACREN computing and
              communications infrastructure - Networks -including the network at
              PoPs, regional connections, VPN Networks and any hosts that reside
              on these networks, any networks that interface with any of these
              networks, and CSIRTs of member NRENs connected to the WACREN
              backbone.
            </p>
            <div class="h-10 bg-gray-200"></div>
          </div>
        </div>
        <!--sponsoring-->
        <div class="border rounded-md h-82">
          <div>
            <p class="text-center text-xl font-bold font-nunito">
              Sponsoring and affiliation
            </p>
            <p
              class="mt-2 text-base font-normal font-nunito px-5 text-center mb-5"
            >
              The CSIRT is sponsored and affiliated with WACREN. WACREN mandates
              that its activities be executed within the scope of the
              constituency.
            </p>
            <div class="h-10 bg-gray-200"></div>
          </div>
        </div>
        <!--something else-->
        <div class="border rounded-md h-82">
          <div>
            <p class="text-center text-xl font-bold font-nunito">
              Public Keys and Other Encryption Information
            </p>
            <div
              class="mt-2 text-base font-normal font-nunito px-5 text-center mb-5"
            >
              <p>User ID : WACREN CSIRT PGP Key csirt@wacren.net</p>
              <p>User ID : WACREN CSIRT PGP Key csirt@wacren.net</p>
              <p>Key ID : 0xD86D6F23812E0297</p>
              <p>Key Type : RSA Key</p>
              <p>Size : 4096</p>
              <p>Expires : Never</p>
              <p>
                Fingerpint : 159F 9CB0 8AA7 EBA9 457B 2A71 D86D 6F23 812E 0297
              </p>
            </div>
            <div class="h-10 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
