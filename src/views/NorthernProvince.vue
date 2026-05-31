<script setup>
const highlights = [
  { title: 'Gorilla Trekking', detail: 'Track mountain gorillas in Volcanoes National Park and feel the power of Rwanda’s most famous wildlife.', icon: '🦍' },
  { title: 'Golden Monkey Safari', detail: 'Spot rare golden monkeys among misty bamboo forests and ancient volcano slopes.', icon: '🐒' },
  { title: 'Musanze Caves', detail: 'Explore limestone caves, scenic valleys, and hiking routes close to the twin lakes and forest trails.', icon: '🗻' }
]

const details = [
  { title: 'Misty mountain landscapes', detail: 'Northern Province is Rwanda at its most dramatic. Volcanoes National Park, the Virunga Mountains and the rolling highlands are home to endangered gorillas, golden monkeys and mist-shrouded forests.' },
  { title: 'Culture, history and fresh air', detail: 'From the peaceful town of Musanze to the cultural villages near Kinigi, the north offers adventure in nature and intimate encounters with local life.' }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img src="https://source.unsplash.com/1600x900/?Rwanda,Volcanoes" alt="Volcanoes National Park" class="absolute inset-0 h-full w-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Northern Province</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Mountain forests, gorillas and golden monkeys</h1>
        <p class="mt-6 text-lg text-slate-300">Experience the highland heart of Rwanda, where volcanoes cradle rainforest, and every trail can lead to a gorilla family or a hidden waterfall.</p>
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