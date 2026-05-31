<script setup>
const highlights = [
  { title: 'Lake Kivu Retreats', detail: 'Relax on the shores of Lake Kivu with sunset boat trips and lakeside resorts.', icon: '🚤' },
  { title: 'Waterfall Hikes', detail: 'Visit waterfalls and forest climbs near Rubavu and Nyamasheke.', icon: '💧' },
  { title: 'Village culture', detail: 'Explore western villages, markets and lakeside community life.', icon: '🏡' }
]

const details = [
  { title: 'Blue lake horizons', detail: 'Western Province is defined by Lake Kivu’s clear water, island-dotted shoreline and dramatic volcano-backed views, creating one of Rwanda’s most photogenic regions.' },
  { title: 'Tranquil adventures', detail: 'From gentle boat rides to waterfalls and forest trails, the west offers a peaceful escape with plenty of active outdoor discovery.' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://source.unsplash.com/1600x900/?Rwanda,Lake,Kivu" alt="Lake Kivu shoreline" class="absolute inset-0 h-full w-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Western Province</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Lake Kivu waters and waterfall paths</h1>
        <p class="mt-6 text-lg text-slate-300">Find peaceful lake life, green hills and natural beauty in Rwanda’s western region, where every turn reveals blue water and welcoming communities.</p>
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