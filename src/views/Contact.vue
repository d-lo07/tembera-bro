<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)
const loading = ref(false)
const errors = ref({})

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
    await new Promise(resolve => setTimeout(resolve, 1500))
    submitted.value = true
    formData.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => { submitted.value = false }, 3000)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
    <img
      src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
      alt="Rwanda landscape"
      class="absolute inset-0 h-full w-full object-cover opacity-60"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/80 to-slate-950/95"></div>

    <div class="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-12">
      <div class="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div class="space-y-6">
          <span class="inline-flex rounded-full bg-emerald-400/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-emerald-200">
            Luxury support</span>
          <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">Contact Us for a Premium Rwanda Journey</h1>
          <p class="max-w-xl text-lg text-slate-300 sm:text-xl">
            Reach out and our travel specialists will tailor an unforgettable Rwanda itinerary, from gorilla trekking to lakeside luxury.
          </p>
          <div class="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
            <a href="/services" class="inline-flex rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-2xl shadow-emerald-500/40 transition hover:bg-emerald-400">
              Book a tour
            </a>
            <div class="rounded-3xl bg-white/10 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
              <span class="font-semibold text-white">24/7 support</span> · Travel planning assistance
            </div>
          </div>
        </div>

        <div class="rounded-[36px] border border-white/10 bg-slate-900/85 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-white">Send us a message</h2>
            <p class="mt-2 text-sm text-slate-400">We’ll respond within 24 hours with your personalized travel plan.</p>
          </div>

          <div v-if="submitted" class="mb-6 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-100">
            ✓ Your message is sent successfully.
          </div>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-200">Name</label>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Your name"
                :class="errors.name ? 'border-red-500 text-white' : 'border-slate-700 text-slate-100'"
                class="w-full rounded-3xl border bg-slate-950/70 px-4 py-3 outline-none transition focus:border-emerald-400"
              />
              <p v-if="errors.name" class="mt-2 text-xs text-red-400">{{ errors.name }}</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-200">Email</label>
              <input
                v-model="formData.email"
                type="email"
                placeholder="you@example.com"
                :class="errors.email ? 'border-red-500 text-white' : 'border-slate-700 text-slate-100'"
                class="w-full rounded-3xl border bg-slate-950/70 px-4 py-3 outline-none transition focus:border-emerald-400"
              />
              <p v-if="errors.email" class="mt-2 text-xs text-red-400">{{ errors.email }}</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-200">Subject</label>
              <input
                v-model="formData.subject"
                type="text"
                placeholder="Tour inquiry"
                :class="errors.subject ? 'border-red-500 text-white' : 'border-slate-700 text-slate-100'"
                class="w-full rounded-3xl border bg-slate-950/70 px-4 py-3 outline-none transition focus:border-emerald-400"
              />
              <p v-if="errors.subject" class="mt-2 text-xs text-red-400">{{ errors.subject }}</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-200">Message</label>
              <textarea
                v-model="formData.message"
                rows="5"
                placeholder="Tell us what you want to experience..."
                :class="errors.message ? 'border-red-500 text-white' : 'border-slate-700 text-slate-100'"
                class="w-full rounded-3xl border bg-slate-950/70 px-4 py-3 outline-none transition focus:border-emerald-400"
              ></textarea>
              <p v-if="errors.message" class="mt-2 text-xs text-red-400">{{ errors.message }}</p>
            </div>

            <button type="submit" :disabled="loading" class="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70">
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>