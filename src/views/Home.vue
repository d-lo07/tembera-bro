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
  <div style="background-color: #020617; color: #F1F5F9;">

    <!-- ── HERO ── -->
    <section class="relative overflow-hidden" style="min-height: 100vh;">
      <div
        v-for="(slide, i) in slides" :key="i"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img :src="slide.image" :alt="slide.alt" loading="eager" class="h-full w-full object-cover" style="filter: brightness(0.45);" />
        <div class="absolute inset-0" style="background: rgba(2,6,23,0.3);"></div>
      </div>

      <div class="relative z-20 flex flex-col items-center justify-center px-6 text-center" style="min-height: 100vh;">
        <div class="max-w-3xl space-y-6">
          <span
            class="inline-block rounded-full px-5 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style="background: rgba(22,163,74,0.15); color: #86EFAC; border: 1px solid rgba(134,239,172,0.25);"
          >
            Tembera URWANDA
          </span>
          <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style="color: #FFFFFF;">
            {{ slides[currentSlide]?.title }}
          </h1>
          <p class="text-lg sm:text-xl" style="color: #94A3B8;">{{ slides[currentSlide]?.subtitle }}</p>
          <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <router-link to="/about"
              class="rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
              style="background: #16A34A; color: #FFFFFF;">
              Explore Rwanda
            </router-link>
            <button @click="nextSlide"
              class="rounded-full px-8 py-3 text-sm font-semibold transition"
              style="border: 1px solid rgba(255,255,255,0.2); color: #F1F5F9;"
              onmouseover="this.style.color='#22C55E'; this.style.borderColor='#22C55E';"
              onmouseout="this.style.color='#F1F5F9'; this.style.borderColor='rgba(255,255,255,0.2)';">
              Next Slide
            </button>
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-8 z-30 flex justify-center gap-2">
        <button v-for="(_, i) in slides" :key="i" @click="currentSlide = i"
          :style="currentSlide === i ? 'background:#16A34A; width:24px;' : 'background:rgba(255,255,255,0.3); width:12px;'"
          style="height:10px; border-radius:999px; transition:all 0.3s; border:none; cursor:pointer;"
        ></button>
      </div>
    </section>

    <!-- ── TAGLINE BAND ── -->
    <section class="py-8 text-center" style="background: #0F172A; border-top: 1px solid rgba(255,255,255,0.06);">
      <p class="text-xl font-semibold" style="color: #FFFFFF;">"Discover the beauty of the land of a thousand hills"</p>
      <p class="mt-1 text-xs uppercase tracking-widest" style="color: #86EFAC;">Rwanda · Africa · Unforgettable</p>
    </section>

    <!-- ── STATS ── -->
    <section class="py-16" style="background: #020617; border-bottom: 1px solid rgba(255,255,255,0.06);">
      <div class="mx-auto max-w-5xl px-6">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl"
              style="background: rgba(22,163,74,0.12); color: #22C55E;">
              <component :is="stat.icon" class="h-5 w-5" />
            </div>
            <p class="text-3xl font-extrabold" style="color: #FFFFFF;">{{ stat.value }}</p>
            <p class="mt-1 text-xs uppercase tracking-wider" style="color: #475569;">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── GALLERY ── -->
    <section class="py-20" style="background: #0F172A;">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <p class="text-xs font-semibold uppercase tracking-widest" style="color: #86EFAC;">Photo highlights</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl" style="color: #FFFFFF;">Local scenes from across the country</h2>
          <p class="mx-auto mt-3 max-w-xl text-sm" style="color: #475569;">Rwanda's landscapes, lakes and city views.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div v-for="item in galleryImages" :key="item.title"
            class="group overflow-hidden rounded-2xl transition hover:-translate-y-1"
            style="border: 1px solid rgba(255,255,255,0.08); background: #020617;">
            <div class="overflow-hidden">
              <img :src="item.image" :alt="item.title"
                class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" style="filter: brightness(0.85);" />
            </div>
            <div class="p-5" style="border-top: 1px solid rgba(255,255,255,0.06);">
              <h3 class="font-bold" style="color: #FFFFFF;">{{ item.title }}</h3>
              <p class="mt-1 text-sm" style="color: #475569;">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── EXPERIENCES ── -->
    <section class="py-20" style="background: #020617;">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <p class="text-xs font-semibold uppercase tracking-widest" style="color: #86EFAC;">Signature experiences</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl" style="color: #FFFFFF;">Rwanda in unforgettable style</h2>
          <p class="mx-auto mt-3 max-w-xl text-sm" style="color: #475569;">
            Luxury lodges, breathtaking trails, and curated cultural experiences.
          </p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(exp, i) in experiences" :key="i"
            class="rounded-2xl p-6 transition"
            style="border: 1px solid rgba(255,255,255,0.08); background: #0F172A;"
            onmouseover="this.style.borderColor='rgba(34,197,94,0.3)';"
            onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';">
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-xl"
              style="background: rgba(22,163,74,0.15); color: #22C55E;">
              <component :is="exp.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-bold" style="color: #FFFFFF;">{{ exp.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed" style="color: #475569;">{{ exp.desc }}</p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <router-link to="/services"
            class="inline-flex items-center gap-1.5 text-sm font-semibold transition"
            style="color: #F1F5F9; text-decoration: underline; text-underline-offset: 4px;"
            onmouseover="this.style.color='#22C55E';"
            onmouseout="this.style.color='#F1F5F9';">
            View all services <ArrowRight class="h-4 w-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- ── DESTINATIONS ── -->
    <section class="py-20" style="background: #0F172A;">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <p class="text-xs font-semibold uppercase tracking-widest" style="color: #86EFAC;">Featured destinations</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl" style="color: #FFFFFF;">Choose the perfect region</h2>
          <p class="mt-2 text-sm" style="color: #475569;">Five provinces, endless adventures.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <div v-for="dest in destinations" :key="dest.name"
            @click="goTo(dest.path)"
            role="button"
            class="group cursor-pointer rounded-2xl p-6 text-left transition hover:-translate-y-1"
            style="border: 1px solid rgba(255,255,255,0.08); background: #020617;"
            onmouseover="this.style.borderColor='rgba(34,197,94,0.3)';"
            onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';">
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-xl"
              style="background: rgba(22,163,74,0.15); color: #22C55E;">
              <component :is="dest.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-bold" style="color: #FFFFFF;">{{ dest.name }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed" style="color: #475569;">{{ dest.description }}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition"
              style="color: #16A34A;"
              onmouseover="this.style.color='#22C55E';"
              onmouseout="this.style.color='#16A34A';">
              Learn more <ArrowRight class="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-16 text-center" style="background: #020617; border-top: 1px solid rgba(255,255,255,0.06);">
      <p class="text-xs font-semibold uppercase tracking-widest mb-2" style="color: #86EFAC;">Ready to visit Rwanda?</p>
      <h2 class="text-3xl font-bold sm:text-4xl" style="color: #FFFFFF;">Plan your journey today</h2>
      <p class="mt-3 text-sm" style="color: #475569;">Our team in Kagugu, Kigali is ready to help.</p>
      <div class="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <router-link to="/contact"
          class="rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
          style="background: #16A34A; color: #FFFFFF;">
          Contact Us
        </router-link>
        <a href="tel:0796608954"
          class="rounded-full px-8 py-3 text-sm font-semibold transition"
          style="border: 1px solid rgba(255,255,255,0.2); color: #F1F5F9;"
          onmouseover="this.style.color='#22C55E'; this.style.borderColor='#22C55E';"
          onmouseout="this.style.color='#F1F5F9'; this.style.borderColor='rgba(255,255,255,0.2)';">
          Call Now
        </a>
      </div>
    </section>

  </div>
</template>