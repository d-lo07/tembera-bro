<script setup>
const highlights = [
  { title: 'Akagera Safari', detail: 'Game drives through Akagera National Park, home to lions, elephants, giraffes and shimmering lakes.', icon: '🦁' },
  { title: 'Lake Ihema', detail: 'Boat cruises across Lake Ihema with flamingos, hippos, and quiet reed-lined islands.', icon: '🚤' },
  { title: 'Cultural Villages', detail: 'Meet artisan communities, taste local dishes, and discover Eastern Rwanda’s warm village culture.', icon: '🛍️' }
]

const details = [
  { title: 'A wild mosaic of habitats', detail: 'Eastern Province blends savanna, wetlands and dense forests. Akagera’s protected landscapes are ideal for safari lovers seeking big game with dramatic African sunsets.' },
  { title: 'Lakeside calm and community life', detail: 'The region is also known for its beautiful lakes, tea plantations and traditional markets, where local crafts and cuisine reflect Rwanda’s peaceful countryside.' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://source.unsplash.com/1600x900/?Rwanda,Akagera" alt="Akagera National Park safari" class="absolute inset-0 h-full w-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Eastern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Akagera’s rivers, lakes and safari plains</h1>
        <p class="mt-6 text-lg text-slate-300">Explore the eastern corner of Rwanda, where Akagera National Park’s wildlife, Lake Ihema’s birdlife, and local village culture create a rich and unforgettable journey.</p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <div v-for="detail in details" :key="detail.title" class="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <h2 class="text-2xl font-semibold text-white">{{ detail.title }}</h2>
          <p class="mt-4 text-slate-300">{{ detail.detail }}</p>
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div v-for="item in highlights" :key="item.title" class="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div class="text-4xl">{{ item.icon }}</div>
          <h2 class="mt-6 text-2xl font-semibold text-white">{{ item.title }}</h2>
          <p class="mt-3 text-slate-300">{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template> 