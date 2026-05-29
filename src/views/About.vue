<template>
<section class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
  <img
    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
    alt="Rwanda hills"
    class="absolute inset-0 h-full w-full object-cover opacity-50"
  />
  <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95"></div>

  <div class="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-12">
    <div class="max-w-4xl space-y-8 text-center">
      <span class="inline-flex rounded-full bg-emerald-400/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-emerald-200">About Rwanda</span>
      <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl">Welcome to the Heart of Africa</h1>
      <p class="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
        Rwanda is a land of dramatic landscapes, vibrant culture, and unparalleled wildlife. Experience luxury safari adventures, serene lake retreats, and meaningful cultural journeys.
      </p>
    </div>

    <div class="mt-16 grid gap-6 lg:grid-cols-3">
      <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <p class="text-4xl">🦍</p>
        <h2 class="mt-6 text-2xl font-semibold text-white">Wildlife Conservation</h2>
        <p class="mt-3 text-slate-300">Rwanda protects mountain gorillas, golden monkeys, and rare bird species through world-class conservation efforts.</p>
      </div>
      <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <p class="text-4xl">🏞️</p>
        <h2 class="mt-6 text-2xl font-semibold text-white">Stunning Landscapes</h2>
        <p class="mt-3 text-slate-300">From misty volcanoes to peaceful lakes, Rwanda’s scenery is diverse, dramatic, and deeply beautiful.</p>
      </div>
      <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <p class="text-4xl">🎉</p>
        <h2 class="mt-6 text-2xl font-semibold text-white">Rich Culture</h2>
        <p class="mt-3 text-slate-300">Engage with welcoming communities, traditional performances, and authentic cuisine that celebrate Rwandan heritage.</p>
      </div>
    </div>
  </div>
</section>
</template>