<script setup lang="ts">
import { ref, computed } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import { pages } from '../data/pageContent'

const page = pages.gallery

type Tab = 'images' | 'videos'
const activeTab = ref<Tab>('images')

// Use gallery items from the page data as image sources
const images = computed(() => {
  const gallerySection = (page.sections || []).find((s: any) => s.type === 'gallery')
  const items = (gallerySection && gallerySection.items) ? gallerySection.items : []
  return items.map((item: any) => {
    const src = item && item.image && item.image.default ? item.image.default : item.image
    const label = item && item.title ? item.title : ''
    return { src: src as string, label }
  })
})

const videos = [
  { id: 'ul_qA7Vz1-Y', title: 'Rwanda — Beautiful Landscapes' },
  { id: 'vDZv58Igimg', title: 'Exploring Rwanda' },
  { id: 'Nd2oNuzdk8A', title: 'Rwanda — Land of a Thousand Hills' },
  { id: '5FVO3IHwIzw', title: 'The Beauty of Rwanda' },
  { id: 'UHvo7ZQPUQU', title: 'Rwanda — Nature & Wildlife' },
  { id: 'oeOdHMPhZaQ', title: 'Discover Rwanda' },
  { id: '--XapoJhfw0', title: 'Rwanda — A Journey' },
]

// autoplay=1 & mute=1 & loop=1 & playlist=ID makes it autoplay, muted, looping
const embedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&rel=0&modestbranding=1`

const lightbox = ref<{ open: boolean; src: string; label: string }>({ open: false, src: '', label: '' })
const openImage = (img: { src: string; label: string }) => { lightbox.value = { open: true, ...img } }
const closeLightbox = () => { lightbox.value = { open: false, src: '', label: '' } }
</script>

<template>
  <div class="bg-[#020617] text-slate-100 min-h-screen">

    <!-- Hero -->
    <section class="relative overflow-hidden min-h-[70vh]">
      <img :src="page.hero.image" alt="Hero image" class="absolute inset-0 h-full w-full object-cover brightness-90" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617cc] via-[#020617dd] to-[#020617ee]"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <div class="max-w-3xl mx-auto space-y-6">
          <span v-if="page.hero.tag" class="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            {{ page.hero.tag }}
          </span>
          <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">{{ page.hero.title }}</h1>
          <p class="text-lg sm:text-xl text-slate-400">{{ page.hero.subtitle }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 bg-surface">
      <div class="mx-auto max-w-7xl px-6">

        <!-- Tab Switcher -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex rounded-2xl bg-[#1A1D27] border border-white/[0.07] p-1 gap-1">
            <button
              @click="activeTab = 'images'"
              :class="[
                'flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition',
                activeTab === 'images'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              ]"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z" />
              </svg>
              Images
              <span class="ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">{{ images.length }}</span>
            </button>
            <button
              @click="activeTab = 'videos'"
              :class="[
                'flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition',
                activeTab === 'videos'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              ]"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              Videos
              <span class="ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">{{ videos.length }}</span>
            </button>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="activeTab === 'images' && images.length === 0" class="text-center py-20 text-slate-500">
          <svg class="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z" />
          </svg>
          <p>No images found in <code class="text-slate-400">src/assets/images</code></p>
        </div>

        <!-- Images Grid -->
        <div v-if="activeTab === 'images' && images.length > 0" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="img in images"
            :key="img.src"
            @click="openImage(img)"
            class="group relative overflow-hidden rounded-3xl border border-slate-700/30 bg-[#020617] cursor-pointer transition hover:-translate-y-1"
          >
            <img
              :src="img.src"
              :alt="img.label"
              class="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
              <span class="text-white text-sm font-semibold">{{ img.label }}</span>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
              <div class="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Videos Grid -->
        <div v-if="activeTab === 'videos'" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="video in videos"
            :key="video.id"
            class="group overflow-hidden rounded-3xl border border-slate-700/30 bg-[#020617] transition hover:-translate-y-1"
          >
            <div class="aspect-video">
              <iframe
                :src="embedUrl(video.id)"
                :title="video.title"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-5 flex items-center gap-3 border-t border-white/[0.05]">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              <p class="text-sm text-slate-300 font-medium leading-snug">{{ video.title }}</p>
              <span class="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-500 uppercase tracking-wider flex-shrink-0">Muted</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section v-if="page.cta" class="py-16 text-center bg-surface border-t border-surface">
      <div class="mx-auto max-w-4xl px-6">
        <p v-if="page.cta.label" class="text-xs font-semibold uppercase tracking-widest mb-2 text-primary">{{ page.cta.label }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl text-white">{{ page.cta.title }}</h2>
        <p v-if="page.cta.subtitle" class="mx-auto mt-3 max-w-xl text-sm text-slate-400">{{ page.cta.subtitle }}</p>
        <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button v-if="page.cta.primary" class="btn-primary">
            {{ page.cta.primary.label }}
          </button>
          <button v-if="page.cta.secondary" class="btn-secondary">
            {{ page.cta.secondary.label }}
          </button>
        </div>
      </div>
    </section>

  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="lightbox.open"
      @click="closeLightbox"
      class="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
    >
      <div @click.stop class="relative max-w-4xl w-full">
        <img :src="lightbox.src" :alt="lightbox.label" class="w-full max-h-[80vh] object-contain rounded-3xl" />
        <p class="text-center text-slate-400 text-sm mt-4">{{ lightbox.label }}</p>
        <button
          @click="closeLightbox"
          class="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#1A1D27] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>