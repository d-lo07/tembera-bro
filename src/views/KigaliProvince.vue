<script setup>
const attractions = [
  { title: 'Art & Cafes', detail: 'Explore Kigali’s modern galleries, vibrant cafes and local markets for craft goods.', icon: '☕' },
  { title: 'Genocide Memorial', detail: 'Visit the Kigali Genocide Memorial to honor history and reflect in a peaceful setting.', icon: '🕊️' },
  { title: 'City Nightlife', detail: 'Enjoy elegant dining, rooftop views and live music in the clean, safe capital.', icon: '🌃' }
]

const details = [
  { title: 'Modern comfort meets heritage', detail: 'Kigali is Rwanda’s polished gateway: safe, green and culturally rich with museums, galleries and stylish dining.' },
  { title: 'A gateway to the whole country', detail: 'From Kigali you can easily reach national parks, lakes and historic towns while enjoying city comforts and local hospitality.' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://source.unsplash.com/1600x900/?Kigali,Rwanda" alt="Kigali city skyline" class="absolute inset-0 h-full w-full object-cover opacity-60" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl space-y-6 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Kigali region</p>
        <h1 class="text-5xl font-extrabold sm:text-6xl">The vibrant, welcoming capital of Rwanda</h1>
        <p class="text-lg text-slate-300">Kigali blends contemporary culture with powerful history, making it the best place to begin or end your Rwandan adventure.</p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <div v-for="detail in details" :key="detail.title" class="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <h2 class="text-2xl font-semibold text-white">{{ detail.title }}</h2>
          <p class="mt-4 text-slate-300">{{ detail.detail }}</p>
        </div>
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