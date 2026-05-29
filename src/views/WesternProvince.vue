<script setup>
const highlights = [
  { title: 'Lake Kivu', detail: 'Luxury lakeside retreats and boat excursions.', icon: '🚤' },
  { title: 'Waterfalls', detail: 'Hidden waterfalls and scenic ridge hikes.', icon: '💧' },
  { title: 'Cultural Trails', detail: 'Rwanda’s western hospitality and village experiences.', icon: '🏡' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://images.unsplash.com/photo-1516222338257-2dbeffaa450c?auto=format&fit=crop&w=1600&q=80" alt="Western Province" class="absolute inset-0 h-full w-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Western Province</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Lakeside luxury and wild water escapes</h1>
        <p class="mt-6 text-lg text-slate-300">Discover glassy lake views, waterfall hikes, and tranquil resorts along Rwanda’s western shores.</p>
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