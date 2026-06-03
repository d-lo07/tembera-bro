<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Globe2, Mountain, Waves, Sparkles, TreeDeciduous, ArrowRight, MapPin, Award, Heart, Users } from 'lucide-vue-next'
import volcanoesImage from '../assets/images/Gorilla.png'
import hotelImage from '../assets/images/Luxury Hotel.png'
import conventionImage from '../assets/images/Conventional.png'

const { t } = useI18n()
const currentSlide = ref(0)
const router = useRouter()

const slides = computed(() => [
  { title: t('home.slide1Title'), subtitle: t('home.slide1Subtitle'), image: volcanoesImage, alt: 'Volcanoes National Park' },
  { title: t('home.slide2Title'), subtitle: t('home.slide2Subtitle'), image: hotelImage, alt: 'Lake Kivu luxury lodge' },
  { title: t('home.slide3Title'), subtitle: t('home.slide3Subtitle'), image: conventionImage, alt: 'Kigali city skyline' }
])

const galleryImages = [
  { image: volcanoesImage,  title: 'Volcanoes National Park', subtitle: 'Misty hills, mountain gorillas and lush rainforest scenery.' },
  { image: hotelImage,      title: 'Lake Kivu Retreat',       subtitle: 'Waterfront lodges, calm waters and warm Rwandan hospitality.' },
  { image: conventionImage, title: 'Kigali City View',        subtitle: 'Modern city culture, contemporary design and safe urban escapes.' }
]

const experiences = [
  { icon: Mountain,      title: 'Gorilla Trekking',  desc: 'Explore volcano forests with expert trackers and see mountain gorillas in their natural habitat.' },
  { icon: Waves,         title: 'Lake Retreats',      desc: 'Relax on the shores of Lake Kivu with stunning sunsets and premium waterfront lodges.' },
  { icon: Sparkles,      title: 'Cultural Immersion', desc: 'Meet local artisans, join music ceremonies, and dine on authentic Rwandan cuisine.' },
  { icon: TreeDeciduous, title: 'Nature & Safari',    desc: 'Discover national parks, rare birds, and dramatic landscapes with private guides.' }
]

const stats = [
  { icon: MapPin, value: '120+', label: 'Unique experiences' },
  { icon: Award,  value: '10',   label: 'Years of expertise' },
  { icon: Heart,  value: '98%',  label: 'Satisfied travellers' },
  { icon: Users,  value: '35+',  label: 'Local partners' }
]

const destinations = computed(() => [
  { name: t('home.kigali'),           description: t('home.kigaliDesc'),   icon: Globe2,        path: '/kigali' },
  { name: t('home.northernProvince'), description: t('home.northernDesc'), icon: Mountain,      path: '/north' },
  { name: t('home.southernProvince'), description: t('home.southernDesc'), icon: Sparkles,      path: '/south' },
  { name: t('home.westernProvince'),  description: t('home.westernDesc'),  icon: Waves,         path: '/west' },
  { name: t('home.easternProvince'),  description: t('home.easternDesc'),  icon: TreeDeciduous, path: '/east' }
])

let timer
onMounted(() => { timer = setInterval(() => { currentSlide.value = (currentSlide.value + 1) % slides.value.length }, 6000) })
onUnmounted(() => clearInterval(timer))

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.value.length }
const goTo = (path) => router.push(path)
</script>

<template>
  <div class="bg-page-dark text-slate-100">

    <!-- ── HERO ── -->
    <section class="relative overflow-hidden min-h-screen">
      <div
        v-for="(slide, i) in slides" :key="i"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img :src="slide.image" :alt="slide.alt" loading="eager" class="h-full w-full object-cover brightness-[0.45]" />
        <div class="absolute inset-0 bg-slate-950/30"></div>
      </div>

      <div class="relative z-20 flex flex-col items-center justify-center px-6 text-center min-h-screen">
        <div class="max-w-3xl space-y-6">
          <span
            class="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300"
          >
            Tembera URWANDA
          </span>
          <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {{ slides[currentSlide]?.title }}
          </h1>
          <p class="text-lg sm:text-xl text-slate-400">{{ slides[currentSlide]?.subtitle }}</p>
          <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <router-link to="/about"
              class="rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90 btn-primary">
              Explore Rwanda
            </router-link>
            <button @click="nextSlide"
              class="rounded-full px-8 py-3 text-sm font-semibold transition btn-secondary">
              Next Slide
            </button>
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-8 z-30 flex justify-center gap-2">
        <button v-for="(_, i) in slides" :key="i" @click="currentSlide = i"
          :class="[
            'h-2 rounded-full transition-all duration-300 border-none cursor-pointer',
            currentSlide === i ? 'bg-primary w-6' : 'bg-white/30 w-3'
          ]"
        ></button>
      </div>
    </section>

    <!-- ── TAGLINE BAND ── -->
    <section class="py-8 text-center bg-surface border-t border-surface">
      <p class="text-xl font-semibold text-white">"Discover the beauty of the land of a thousand hills"</p>
      <p class="mt-1 text-xs uppercase tracking-widest text-primary">Rwanda · Africa · Unforgettable</p>
    </section>

    <!-- ── STATS ── -->
    <section class="py-16 bg-surface border-b border-surface">
      <div class="mx-auto max-w-5xl px-6">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
              <component :is="stat.icon" class="h-5 w-5" />
            </div>
            <p class="text-3xl font-extrabold text-white">{{ stat.value }}</p>
            <p class="mt-1 text-xs uppercase tracking-wider text-slate-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── GALLERY ── -->
    <section class="py-20 bg-surface">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <p class="text-xs font-semibold uppercase tracking-widest text-primary">Photo highlights</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl text-white">Local scenes from across the country</h2>
          <p class="mx-auto mt-3 max-w-xl text-sm text-slate-400">Rwanda's landscapes, lakes and city views.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div v-for="item in galleryImages" :key="item.title"
            class="group overflow-hidden rounded-2xl transition hover:-translate-y-1 border border-surface bg-surface">
            <div class="overflow-hidden">
              <img :src="item.image" :alt="item.title"
                class="h-56 w-full object-cover transition duration-500 group-hover:scale-105 brightness-[0.85]" />
            </div>
            <div class="p-5 border-t border-surface">
              <h3 class="font-bold text-white">{{ item.title }}</h3>
              <p class="mt-1 text-sm text-slate-400">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── EXPERIENCES ── -->
    <section class="py-20 bg-surface">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <p class="text-xs font-semibold uppercase tracking-widest text-primary">Signature experiences</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl text-white">Rwanda in unforgettable style</h2>
          <p class="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Luxury lodges, breathtaking trails, and curated cultural experiences.
          </p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(exp, i) in experiences" :key="i"
            class="rounded-2xl p-6 transition border border-surface bg-surface hover:border-[#06b6d4]/30"
          >
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
              <component :is="exp.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-bold text-white">{{ exp.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ exp.desc }}</p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <router-link to="/services"
            class="inline-flex items-center gap-1.5 text-sm font-semibold transition underline underline-offset-4 text-slate-100 hover:text-primary">
            View all services <ArrowRight class="h-4 w-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- ── DESTINATIONS ── -->
    <section class="py-20 bg-surface">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <p class="text-xs font-semibold uppercase tracking-widest text-primary">Featured destinations</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl text-white">Choose the perfect region</h2>
          <p class="mt-2 text-sm text-slate-400">Five provinces, endless adventures.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <div v-for="dest in destinations" :key="dest.name"
            @click="goTo(dest.path)"
            role="button"
            class="group cursor-pointer rounded-2xl p-6 text-left transition hover:-translate-y-1 border border-surface bg-surface hover:border-[#06b6d4]/30"
          >
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
              <component :is="dest.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-bold text-white">{{ dest.name }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-slate-400">{{ dest.description }}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition text-primary">
              Learn more <ArrowRight class="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-16 text-center bg-surface border-t border-surface">
      <p class="text-xs font-semibold uppercase tracking-widest mb-2 text-primary">Ready to visit Rwanda?</p>
      <h2 class="text-3xl font-bold sm:text-4xl text-white">Plan your journey today</h2>
      <p class="mt-3 text-sm text-slate-400">Our team in Kagugu, Kigali is ready to help.</p>
      <div class="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <router-link to="/contact"
          class="btn-primary"
        >
          Contact Us
        </router-link>
        <a href="tel:0796608954"
          class="btn-secondary"
        >
          Call Now
        </a>
      </div>
    </section>

  </div>
</template>
