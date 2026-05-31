<script setup>
const highlights = [
  { title: 'Nyungwe Forest', detail: 'Walk the canopy and meet chimpanzees in one of Africa’s oldest rainforests.', icon: '🌿' },
  { title: 'Tea Estates', detail: 'Wander among lush tea fields and learn about Rwanda’s world-class tea production.', icon: '🍃' },
  { title: 'Cultural Heritage', detail: 'Visit Nyanza’s royal palace, local markets, and traditional dance performances.', icon: '🎋' }
]

const details = [
  { title: 'Ancient rainforest beauty', detail: 'Southern Province is home to Nyungwe Forest, where misty canopy walks, waterfalls and chimpanzee families create unforgettable rainforest experiences.' },
  { title: 'History, coffee and calm', detail: 'From the royal sites of Nyanza to the rolling tea hills near Butare, this region is a peaceful blend of history, agriculture and green scenery.' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://source.unsplash.com/1600x900/?Rwanda,Nyungwe" alt="Nyungwe Forest and tea fields" class="absolute inset-0 h-full w-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Southern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Rainforest trails, tea hills and royal tradition</h1>
        <p class="mt-6 text-lg text-slate-300">Discover the south of Rwanda, where ancient forests meet tea plantations, cultural landmarks and quiet countryside energy.</p>
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