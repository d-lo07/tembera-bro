<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Transition } from 'vue'
import { ArrowRight, Play } from 'lucide-vue-next'

const props = defineProps({
  page: { type: Object, required: true }
})

const router = useRouter()
const dropdownOpen = ref(false)
const selectedCategory = ref('all')
const selectedMedia = ref(null)
const submitted = ref(false)
const loading = ref(false)
const errors = ref({})
const formData = ref({ name: '', email: '', subject: '', message: '' })

const navigate = (to) => {
  if (!to) return
  if (typeof to !== 'string') return
  if (to.startsWith('http') || to.startsWith('mailto:')) {
    window.open(to, '_blank')
  } else {
    router.push(to)
  }
}

const isActiveCategory = (category) => selectedCategory.value === category
const chooseCategory = (category) => {
  selectedCategory.value = category
  dropdownOpen.value = false
}

const validateForm = () => {
  errors.value = {}
  if (!formData.value.name.trim()) errors.value.name = 'Name is required'
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Invalid email format'
  }
  if (!formData.value.subject.trim()) errors.value.subject = 'Subject is required'
  if (!formData.value.message.trim()) errors.value.message = 'Message is required'
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 800))
    submitted.value = true
    formData.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => { submitted.value = false }, 3000)
  } finally {
    loading.value = false
  }
}

const mediaItems = computed(() => {
  if (!props.page.media) return []
  if (selectedCategory.value === 'all') return props.page.media
  return props.page.media.filter((item) => item.category === selectedCategory.value)
})

const galleryItems = computed(() => props.page.gallery || [])
</script>

<template>
  <div class="bg-page-dark text-slate-100 min-h-screen">
    <section class="relative overflow-hidden min-h-[90vh]">
      <img :src="page.hero.image" alt="Hero image" class="absolute inset-0 h-full w-full object-cover brightness-90" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#0b1220cc] via-[#0b1220dd] to-[#0b1220ee]"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <div class="max-w-3xl mx-auto space-y-6">
          <span v-if="page.hero.tag" class="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            {{ page.hero.tag }}
          </span>
          <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">{{ page.hero.title }}</h1>
          <p class="text-lg sm:text-xl text-slate-400">{{ page.hero.subtitle }}</p>
          <div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <button
              v-for="action in page.hero.actions"
              :key="action.label"
              type="button"
              @click="navigate(action.to || action.href)"
              :class="['rounded-full px-8 py-3 text-sm font-semibold transition', action.primary ? 'btn-primary' : 'btn-secondary']"
            >
              {{ action.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section v-for="section in page.sections" :key="section.title || section.type" class="py-20 bg-surface" :style="section.background">
      <div class="mx-auto max-w-7xl px-6"></div>
        <div v-if="section.title" class="mb-12 text-center">
          <p v-if="section.label" class="text-xs font-semibold uppercase tracking-widest text-primary">{{ section.label }}</p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl text-white">{{ section.title }}</h2>
          <p v-if="section.subtitle" class="mx-auto mt-3 max-w-xl text-sm text-slate-400">{{ section.subtitle }}</p>

        <div v-if="section.type === 'text'" class="space-y-6 text-slate-300">
          <p v-for="(paragraph, index) in section.paragraphs" :key="index">{{ paragraph }}</p>
        </div>

        <div v-if="section.type === 'cards'" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="item in section.items" :key="item.title"
            class="group overflow-hidden rounded-3xl border border-surface bg-surface p-6 transition hover:-translate-y-1"
          >
            <img v-if="item.image" :src="item.image" :alt="item.title" class="mb-6 h-56 w-full object-cover rounded-3xl transition duration-500 group-hover:scale-105" />
            <div v-else class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
              <component v-if="item.icon" :is="item.icon" class="h-8 w-8" />
            </div>
            <h3 class="text-2xl font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-3 text-slate-300">{{ item.subtitle || item.description }}</p>
            <div v-if="item.link || item.to" class="mt-6">
              <button
                type="button"
                @click="navigate(item.link || item.to)"
                class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0497ba]"
              >
                Learn more <ArrowRight class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div v-if="section.type === 'features'" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in section.items" :key="item.title" class="rounded-3xl border border-slate-700/30 bg-surface p-8 transition hover:-translate-y-1">
            <div class="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#06b6d4]/10 text-[#06b6d4] mb-6">
              <component :is="item.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-3 text-slate-300">{{ item.description }}</p>
          </div>
        </div>

        <div v-if="section.type === 'stats'" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in section.items" :key="stat.label" class="rounded-3xl border border-slate-700/30 bg-surface p-8 text-center">
            <div class="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#06b6d4]/10 text-[#06b6d4]">
              <component :is="stat.icon" class="h-6 w-6" />
            </div>
            <p class="text-3xl font-extrabold text-white">{{ stat.value }}</p>
            <p class="mt-2 text-sm uppercase tracking-wider text-slate-400">{{ stat.label }}</p>
          </div>
        </div>

        <div v-if="section.type === 'gallery'" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="item in section.items" :key="item.title" class="group overflow-hidden rounded-3xl border border-slate-700/30 bg-surface transition hover:-translate-y-1">
            <img :src="item.image" :alt="item.title" class="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-white">{{ item.title }}</h3>
              <p class="mt-3 text-slate-300">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>

        <div v-if="section.type === 'media'" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="item in mediaItems" :key="item.title" class="group relative overflow-hidden rounded-3xl border border-slate-700/30 bg-surface transition hover:-translate-y-1">
            <a
              v-if="item.type === 'video'"
              :href="item.src"
              target="_blank"
              rel="noreferrer"
              class="block"
            >
              <img :src="item.image" :alt="item.title" class="h-72 w-full object-cover transition duration-500 group-hover:scale-105 brightness-75" />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-primary transition group-hover:scale-110">
                  <Play class="h-6 w-6" />
                </div>
              </div>
            </a>
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-white">{{ item.title }}</h3>
              <p class="mt-3 text-slate-300">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>

        <div v-if="section.type === 'form'" class="max-w-3xl mx-auto rounded-[32px] border border-slate-700/30 bg-surface p-8 shadow-2xl shadow-slate-950/30">
          <div class="space-y-4">
            <p class="text-slate-300">{{ section.subtitle }}</p>
            <div v-if="submitted" class="rounded-3xl bg-[#06b6d4]/15 p-4 text-[#d8f2ff]">Your message was sent successfully.</div>
            <form @submit.prevent="submitForm" class="space-y-5">
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-200">Name</label>
                <input v-model="formData.name" type="text" placeholder="Your name" class="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" />
                <p v-if="errors.name" class="mt-2 text-xs text-red-400">{{ errors.name }}</p>
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-200">Email</label>
                <input v-model="formData.email" type="email" placeholder="you@example.com" class="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" />
                <p v-if="errors.email" class="mt-2 text-xs text-red-400">{{ errors.email }}</p>
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-200">Subject</label>
                <input v-model="formData.subject" type="text" placeholder="Subject" class="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" />
                <p v-if="errors.subject" class="mt-2 text-xs text-red-400">{{ errors.subject }}</p>
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-200">Message</label>
                <textarea v-model="formData.message" placeholder="How can we help?" class="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 min-h-[140px]"></textarea>
                <p v-if="errors.message" class="mt-2 text-xs text-red-400">{{ errors.message }}</p>
              </div>
              <button type="submit" class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" :disabled="loading">
                {{ loading ? 'Sending...' : 'Send message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section v-if="page.cta" class="py-16 text-center bg-surface border-t border-surface">
      <div class="mx-auto max-w-4xl px-6">
        <p v-if="page.cta.label" class="text-xs font-semibold uppercase tracking-widest mb-2 text-primary">{{ page.cta.label }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl text-white">{{ page.cta.title }}</h2>
        <p v-if="page.cta.subtitle" class="mx-auto mt-3 max-w-xl text-sm text-slate-400">{{ page.cta.subtitle }}</p>
        <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            v-if="page.cta.primary"
            @click="navigate(page.cta.primary.to || page.cta.primary.href)"
            class="btn-primary"
          >
            {{ page.cta.primary.label }}
          </button>
          <button
            v-if="page.cta.secondary"
            @click="navigate(page.cta.secondary.to || page.cta.secondary.href)"
            class="btn-secondary"
          >
            {{ page.cta.secondary.label }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
