<script setup>
import { ref } from 'vue'

const expandedService = ref(null)

const services = [
  {
    id: 1,
    title: 'Tourism Guidance',
    icon: '🗺️',
    description: 'Personalized routes for every traveler.',
    details: 'Our expert guides craft unique journeys across Rwanda, from cities to national parks. Enjoy a seamless trip with curated recommendations tailored to your interests.'
  },
  {
    id: 2,
    title: 'Luxury Stays',
    icon: '🏨',
    description: 'Premium lodges and boutique hotels.',
    details: 'We connect you with the finest accommodations in Rwanda, including eco-luxury lodges, lakeside resorts, and intimate boutique stays with unbeatable service.'
  },
  {
    id: 3,
    title: 'Safari & Wildlife',
    icon: '🦍',
    description: 'Iconic wildlife experiences.',
    details: 'Track mountain gorillas, spot rare birdlife, and explore Rwanda’s protected areas with expert rangers for a safe, unforgettable safari adventure.'
  },
  {
    id: 4,
    title: 'Cultural Immersion',
    icon: '🎭',
    description: 'Authentic local encounters.',
    details: 'Meet artisans, visit cultural villages, and participate in traditional ceremonies to experience Rwanda’s heritage in an immersive way.'
  },
  {
    id: 5,
    title: 'Adventure Activities',
    icon: '🚵',
    description: 'Thrilling mountain and water experiences.',
    details: 'From hiking volcanic trails to kayaking on Lake Kivu, enjoy carefully curated adventure activities designed for both thrill-seekers and leisure travelers.'
  },
  {
    id: 6,
    title: 'Photography Tours',
    icon: '📸',
    description: 'Capture Rwanda’s most stunning moments.',
    details: 'Travel with professional photography guides who know the best light, viewpoints, and hidden spots for iconic Rwanda images.'
  }
]

const toggleService = (id) => {
  expandedService.value = expandedService.value === id ? null : id
}
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img
      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80"
      alt="Rwanda service background"
      class="absolute inset-0 h-full w-full object-cover opacity-40"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div class="max-w-3xl text-center mx-auto mb-16">
        <span class="inline-flex rounded-full bg-emerald-400/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-emerald-200">Premium services</span>
        <h1 class="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">Exceptional travel support for your Rwanda journey</h1>
        <p class="mt-6 text-lg text-slate-300">Discover immersive experiences, luxury accommodations, and exclusive safari packages designed for discerning travelers.</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.id"
          @click="toggleService(service.id)"
          class="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20 transition duration-500 hover:-translate-y-2 hover:bg-white/10 hover:ring-1 hover:ring-emerald-400/40 cursor-pointer"
        >
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-3xl ring-1 ring-emerald-500/20">
            {{ service.icon }}
          </div>
          <h2 class="mt-8 text-2xl font-semibold text-white">{{ service.title }}</h2>
          <p class="mt-3 text-slate-300">{{ service.description }}</p>

          <div
            v-if="expandedService === service.id"
            class="mt-6 rounded-[28px] bg-slate-950/80 p-5 border border-emerald-400/10 text-slate-200"
          >
            <p>{{ service.details }}</p>
            <button class="mt-5 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>