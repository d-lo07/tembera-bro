<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('all')
const selectedImage = ref(null)

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    category: 'landscape',
    title: 'Rwanda Hills'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80',
    category: 'culture',
    title: 'Traditional Dance'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500534671455-5dd0d5c2de64?auto=format&fit=crop&w=900&q=80',
    category: 'wildlife',
    title: 'Gorilla Trek'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=900&q=80',
    category: 'nature',
    title: 'Lake Kivu'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    category: 'wildlife',
    title: 'Safari Trails'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1494475673543-6d565a7c89ac?auto=format&fit=crop&w=900&q=80',
    category: 'culture',
    title: 'Craft Market'
  }
]

const categories = ['all', 'landscape', 'wildlife', 'culture', 'nature']

const filteredImages = computed(() => {
  return selectedCategory.value === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory.value)
})

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}

const nextImage = () => {
  if (!selectedImage.value) return
  const currentIndex = images.findIndex(img => img.id === selectedImage.value.id)
  selectedImage.value = images[(currentIndex + 1) % images.length]
}

const prevImage = () => {
  if (!selectedImage.value) return
  const currentIndex = images.findIndex(img => img.id === selectedImage.value.id)
  selectedImage.value = images[(currentIndex - 1 + images.length) % images.length]
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white pt-24 pb-16 px-4">
    <div class="mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-300">Visual stories</p>
        <h1 class="mt-4 text-5xl font-extrabold">Rwanda Gallery</h1>
        <p class="mx-auto mt-4 max-w-2xl text-slate-300">Browse curated travel moments featuring landscapes, wildlife, culture, and the best Rwanda has to offer.</p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="selectedCategory === category ? 'bg-emerald-400 text-slate-950' : 'bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20'"
          class="rounded-full px-5 py-3 text-sm font-semibold transition"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="image in filteredImages"
          :key="image.id"
          @click="openImage(image)"
          class="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/10 cursor-pointer"
        >
          <img :src="image.src" :alt="image.title" class="h-96 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white opacity-90">
            <p class="text-sm uppercase tracking-[0.2em] text-emerald-300">{{ image.category }}</p>
            <h2 class="mt-2 text-2xl font-semibold">{{ image.title }}</h2>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
      <div class="relative w-full max-w-5xl rounded-[32px] border border-white/10 bg-slate-900/95 shadow-2xl">
        <img :src="selectedImage.src" :alt="selectedImage.title" class="h-[70vh] w-full object-cover rounded-t-[32px]" />
        <div class="space-y-4 p-8 text-white">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-emerald-300">Featured</p>
              <h2 class="text-3xl font-bold">{{ selectedImage.title }}</h2>
            </div>
            <button @click="closeImage" class="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20">Close</button>
          </div>
          <p class="text-slate-300">Explore this dramatic scene and plan your perfect Rwanda itinerary. Tap arrows to browse more photos.</p>
          <div class="flex items-center justify-between gap-4">
            <button @click="prevImage" class="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20">Previous</button>
            <button @click="nextImage" class="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>