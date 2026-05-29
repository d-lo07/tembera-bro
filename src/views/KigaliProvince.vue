<script setup>
const attractions = [
  { title: 'Art & Cafes', detail: 'Explore Kigali’s modern galleries, vibrant cafes, and street markets.', icon: '☕' },
  { title: 'Genocide Memorial', detail: 'Visit Rwanda’s most important history and remembrance center.', icon: '🕊️' },
  { title: 'City Nightlife', detail: 'Enjoy upscale dining, rooftop bars, and live music.', icon: '🌃' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://images.unsplash.com/photo-1491189722232-2c4e83ef0848?auto=format&fit=crop&w=1600&q=80" alt="Kigali city" class="absolute inset-0 h-full w-full object-cover opacity-60" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl space-y-6 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Kigali region</p>
        <h1 class="text-5xl font-extrabold sm:text-6xl">A sophisticated city at the heart of Rwanda</h1>
        <p class="text-lg text-slate-300">Kigali blends modern culture, elegant dining, and powerful history. This city is the perfect starting point for luxury travel in Rwanda.</p>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div v-for="item in attractions" :key="item.title" class="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div class="text-4xl">{{ item.icon }}</div>
          <h2 class="mt-6 text-2xl font-semibold text-white">{{ item.title }}</h2>
          <p class="mt-3 text-slate-300">{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template> 