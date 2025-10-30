<!-- Please remove this file from your project -->
<template>
  <section class="section auth-grid">
    <div class="auth-hero">
      <div class="hero-content">
        <span class="brand-pill">JAIMATRIX</span>
        <h1>Elevate your capital raise with confidence</h1>
        <p>
          Seamlessly craft investor-ready proposals, collaborate with your team,
          and track every milestone from a single, beautiful workspace.
        </p>
        <ul class="feature-list">
          <li>
            <i class="fa-solid fa-sparkles"></i>
            Guided fundraising workflows tailored to your industry
          </li>
          <li>
            <i class="fa-solid fa-chart-line"></i>
            Real-time insights into investor engagement and status
          </li>
          <li>
            <i class="fa-solid fa-shield-heart"></i>
            Enterprise-grade security that keeps your data protected
          </li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="glass-panel">
          <img src="/assets/signin-banner.png" alt="JAIMATRIX preview" />
        </div>
        <div class="stats-card">
          <div>
            <span class="eyebrow">Projects Funded</span>
            <strong>240+</strong>
          </div>
          <div>
            <span class="eyebrow">Active Investors</span>
            <strong>1.2k</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-form-panel">
      <Login />
    </div>
  </section>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'Default',
  components: {
    Login,
  },
}
</script>

<style scoped>
.auth-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px;
  padding: 48px clamp(16px, 4vw, 72px);
  position: relative;
}

.auth-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  padding: clamp(24px, 3vw, 48px);
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(99, 102, 241, 0.42), rgba(14, 165, 233, 0.28));
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 32px 80px -40px rgba(15, 23, 42, 0.45);
  color: #f8fafc;
  overflow: hidden;
}

.auth-hero::before,
.auth-hero::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  filter: blur(0);
  opacity: 0.4;
}

.auth-hero::before {
  inset: auto auto -120px -120px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle at center, rgba(244, 114, 182, 0.55), transparent 65%);
}

.auth-hero::after {
  inset: -140px -80px auto auto;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle at center, rgba(37, 99, 235, 0.45), transparent 70%);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 520px;
}

.brand-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.45);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  color: #e0f2fe;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.15;
  color: #f8fafc;
}

.hero-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(226, 232, 240, 0.86);
}

.feature-list {
  display: grid;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 0.98rem;
  color: rgba(241, 245, 249, 0.92);
}

.feature-list i {
  font-size: 1.1rem;
  color: #fbbf24;
  background: rgba(15, 23, 42, 0.4);
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(226, 232, 240, 0.2);
}

.hero-visual {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.glass-panel {
  border-radius: 28px;
  padding: clamp(18px, 2vw, 26px);
  background: rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
}

.glass-panel img {
  width: 100%;
  display: block;
  border-radius: 20px;
  box-shadow: 0 24px 60px -35px rgba(15, 23, 42, 0.75);
}

.stats-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(148, 163, 184, 0.4);
  backdrop-filter: blur(16px);
  font-size: 0.95rem;
  color: rgba(226, 232, 240, 0.9);
}

.stats-card strong {
  display: block;
  margin-top: 6px;
  font-size: 1.8rem;
  font-weight: 700;
  color: #f8fafc;
}

.stats-card .eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.65);
}

.auth-form-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 2vw, 24px);
}

@media (max-width: 1200px) {
  .auth-grid {
    gap: 32px;
    padding: 32px clamp(16px, 6vw, 48px);
  }

  .auth-hero {
    padding: clamp(24px, 4vw, 36px);
  }
}

@media (max-width: 992px) {
  .auth-grid {
    grid-template-columns: 1fr;
    padding-top: clamp(32px, 10vw, 64px);
  }

  .auth-form-panel {
    padding-bottom: clamp(32px, 12vw, 72px);
  }
}

@media (max-width: 640px) {
  .auth-hero {
    gap: 32px;
  }

  .feature-list {
    gap: 12px;
  }

  .feature-list li {
    padding: 12px 14px;
    font-size: 0.95rem;
  }
}
</style>

