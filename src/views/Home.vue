<script setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(0)
const selectedDestination = ref(null)

const slides = [
  {
    title: 'Luxury Rwanda Escapes',
    subtitle: 'Discover dramatic landscapes and unforgettable adventures',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Travel the Land of a Thousand Hills',
    subtitle: 'From lush forests to vibrant culture',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Tailor-made Safari Journeys',
    subtitle: 'Experience wildlife, luxury lodges, and local cuisine',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80'
  }
]

const destinations = [
  { name: 'Kigali', description: 'Modern city with art, dining, and heart.', icon: '🏙️' },
  { name: 'Northern Province', description: 'Mystical mountains and gorilla trekking.', icon: '🦍' },
  { name: 'Southern Province', description: 'Tranquil lakes and tea-covered hills.', icon: '🌿' },
  { name: 'Western Province', description: 'Lake Kivu sunsets and water adventures.', icon: '🌅' },
  { name: 'Eastern Province', description: 'Wildlife parks and cultural safaris.', icon: '🦁' }
]

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 6000)
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <div>
    <section class="relative min-h-screen overflow-hidden">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img :src="slide.image" alt="slide.title" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <div class="max-w-3xl space-y-6">
          <span class="inline-flex rounded-full bg-emerald-500/20 px-5 py-2 text-sm uppercase tracking-[0.25em] text-emerald-100">
            Premium Rwanda Travel
          </span>
          <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">{{ slides[currentSlide].title }}</h1>
          <p class="text-lg text-emerald-100/90 sm:text-xl">{{ slides[currentSlide].subtitle }}</p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/about" class="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400">
              Explore More
            </a>
            <button
              @click="nextSlide"
              class="rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
            >
              Next Slide
            </button>
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-10 z-30 flex justify-center gap-3">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentSlide = index"
          :class="currentSlide === index ? 'bg-emerald-500' : 'bg-white/60'"
          class="h-3 w-3 rounded-full transition"
        ></button>
      </div>
    </section>

    <section class="bg-slate-950 text-white py-24">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div class="space-y-6">
            <p class="text-sm uppercase tracking-[0.3em] text-emerald-400">Signature itineraries</p>
            <h2 class="text-4xl font-bold sm:text-5xl">Rwanda in unforgettable style</h2>
            <p class="max-w-2xl text-lg text-slate-300">Experience Rwanda’s luxury lodges, breathtaking hiking trails, and curated cultural experiences. Every tour is designed to feel exclusive.</p>
          </div>
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
              <p class="text-3xl">🦍</p>
              <h3 class="mt-4 text-xl font-semibold">Gorilla Trekking</h3>
              <p class="mt-3 text-sm text-slate-300">Explore volcano forests with expert trackers and see mountain gorillas in their natural habitat.</p>
            </div>
            <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
              <p class="text-3xl">🌊</p>
              <h3 class="mt-4 text-xl font-semibold">Lake Retreats</h3>
              <p class="mt-3 text-sm text-slate-300">Relax on the shores of Lake Kivu with stunning sunsets and premium waterfront lodges.</p>
            </div>
            <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
              <p class="text-3xl">🎭</p>
              <h3 class="mt-4 text-xl font-semibold">Cultural Immersion</h3>
              <p class="mt-3 text-sm text-slate-300">Meet local artisans, join music ceremonies, and dine on authentic Rwandan cuisine.</p>
            </div>
            <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
              <p class="text-3xl">🌿</p>
              <h3 class="mt-4 text-xl font-semibold">Nature & Safari</h3>
              <p class="mt-3 text-sm text-slate-300">Discover national parks, rare birds, and dramatic landscapes with private guides.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="mx-auto max-w-7xl px-6">
        <div class="text-center mb-16">
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-500">Featured destinations</p>
          <h2 class="mt-4 text-4xl font-bold text-slate-900">Choose the perfect region</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="dest in destinations"
            :key="dest.name"
            @click="selectedDestination = dest"
            class="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-left shadow-lg transition hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <div class="text-4xl">{{ dest.icon }}</div>
            <h3 class="mt-5 text-xl font-semibold text-slate-900">{{ dest.name }}</h3>
            <p class="mt-3 text-sm text-slate-600">{{ dest.description }}</p>
            <div class="mt-6 inline-flex items-center gap-2 text-emerald-600 font-semibold">
              <span>Learn more</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="selectedDestination" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div class="w-full max-w-2xl rounded-[32px] border border-white/10 bg-slate-900/95 p-8 shadow-2xl">
        <div class="flex justify-between gap-4">
          <div>
            <div class="text-5xl">{{ selectedDestination.icon }}</div>
            <h3 class="mt-4 text-3xl font-bold text-white">{{ selectedDestination.name }}</h3>
            <p class="mt-3 text-slate-300">{{ selectedDestination.description }}</p>
          </div>
          <button @click="selectedDestination = null" class="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>