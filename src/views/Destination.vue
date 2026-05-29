<script setup>
import { ref } from 'vue'

const regions = [
  {
    name: 'Kigali',
    description: 'The vibrant capital city with art, cuisine, and modern hotels.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    link: '/kigali'
  },
  {
    name: 'Northern Province',
    description: 'Mountain gorillas, volcano treks, and emerald tea hills.',
    image: 'https://images.unsplash.com/photo-1516528395216-900b66d5878b?auto=format&fit=crop&w=1200&q=80',
    link: '/north'
  },
  {
    name: 'Southern Province',
    description: 'Scenic lakes, rolling hills, and cultural village tours.',
    image: 'https://images.unsplash.com/photo-1526481280696-3bfa7568c926?auto=format&fit=crop&w=1200&q=80',
    link: '/south'
  },
  {
    name: 'Western Province',
    description: 'Lakeside luxury and dramatic waterfalls.',
    image: 'https://images.unsplash.com/photo-1494707924465-4d1c7d3ed35d?auto=format&fit=crop&w=1200&q=80',
    link: '/west'
  },
  {
    name: 'Eastern Province',
    description: 'Wildlife reserves, safari routes, and cultural experiences.',
    image: 'https://images.unsplash.com/photo-1554861695-0c17ae0d6e7f?auto=format&fit=crop&w=1200&q=80',
    link: '/east'
  }
]
</script>

<template>
  <section class="min-h-screen bg-slate-950 text-white">
    <div class="relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80" alt="Rwanda destination" class="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>

      <div class="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Destination guide</p>
        <h1 class="mt-4 text-5xl font-extrabold sm:text-6xl">Explore Rwanda’s most iconic regions</h1>
        <p class="mx-auto mt-6 max-w-3xl text-lg text-slate-300">Browse curated destination sections and choose the region that matches your dream itinerary.</p>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-8 lg:grid-cols-2">
        <div v-for="region in regions" :key="region.name" class="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-2">
          <img :src="region.image" :alt="region.name" class="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="p-8">
            <h2 class="text-3xl font-semibold text-white">{{ region.name }}</h2>
            <p class="mt-4 text-slate-300">{{ region.description }}</p>
            <router-link :to="region.link" class="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Discover {{ region.name }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>