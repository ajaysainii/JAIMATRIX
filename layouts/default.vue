<template>
  <div class="app-shell">
    <div class="app-background"></div>
    <main class="app-content">
      <Nuxt />
      <BackToTopButton />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.app-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(1200px circle at 15% 20%, rgba(79, 70, 229, 0.25), transparent 55%),
    radial-gradient(900px circle at 85% 10%, rgba(14, 116, 144, 0.25), transparent 60%),
    radial-gradient(1000px circle at 80% 85%, rgba(236, 72, 153, 0.18), transparent 65%),
    linear-gradient(160deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.65) 40%, rgba(30, 41, 59, 0.75) 100%);
  backdrop-filter: blur(60px);
  z-index: 0;
}

.app-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .app-background {
    background:
      radial-gradient(900px circle at 50% -10%, rgba(99, 102, 241, 0.28), transparent 60%),
      radial-gradient(700px circle at 80% 90%, rgba(244, 114, 182, 0.22), transparent 65%),
      linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.7) 100%);
  }
}
</style>