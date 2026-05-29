<script setup>
const highlights = [
  { title: 'Gorilla Trekking', detail: 'Track mountain gorillas in Volcanoes National Park.', icon: '🦍' },
  { title: 'Golden Monkey Safari', detail: 'See rare golden monkeys in their misty forest home.', icon: '🐒' },
  { title: 'Musanze Caves', detail: 'Explore underground cave systems and scenic hiking trails.', icon: '🗻' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://images.unsplash.com/photo-1519617726309-9ffe3a94537d?auto=format&fit=crop&w=1600&q=80" alt="Northern Rwanda" class="absolute inset-0 h-full w-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Northern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Mystical mountains and gorilla expeditions</h1>
        <p class="mt-6 text-lg text-slate-300">Discover the lush highlands where the mist settles over volcano peaks, gorillas roam, and adventure awaits.</p>
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