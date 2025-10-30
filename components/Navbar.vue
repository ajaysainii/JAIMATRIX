<template>
  <div class="navbar-das">
    <div class="container-fluid px-2">
      <div class="navbar-shell">
        <div class="navbar-branding">
          <div class="navbar-logo">
            <img src="/assets/jaim_logo.png" alt="JAIMATRIX" />
          </div>
          <div class="navbar-copy">
            <span class="navbar-eyebrow">Fundraiser Portal</span>
            <h2 class="navbar-title">Welcome back</h2>
            <p class="navbar-subtitle">Keep track of your companies and proposals in one place.</p>
          </div>
        </div>
        <div class="navbar-actions">
          <button class="ghost-btn" @click="showProfile">
            <i class="fa-solid fa-user"></i>
            Profile
          </button>
          <button class="ghost-btn danger" @click="logout">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import authenticated from '@/middleware/authenticated'


export default {
    name:'NavbarComponent',
    middleware: [authenticated],
    components:{
        
    },
    data (){
        return{
            // showChild: false
            items: [
          {
            text: 'Projects Proposal',
            href: '#'
          },
          {
            text: 'Active',
            active: true
          },
        ]
        }
    },
    methods:{
        showProfile() {
            this.$router.push('/Profile')        
        },
        logout() {
            localStorage.clear();
            this.$router.push('/');
            this.$toast.success('Successfully Logout')
        },
    },
  
}
</script>
<style scoped>
.navbar-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(24px, 4vw, 48px);
}

.navbar-branding {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 28px);
}

.navbar-logo {
  width: 64px;
  height: 64px;
  border-radius: 22px;
  background: rgba(99, 102, 241, 0.12);
  display: grid;
  place-items: center;
  border: 1px solid rgba(99, 102, 241, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.navbar-logo img {
  width: 46px;
}

.navbar-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.navbar-eyebrow {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(15, 23, 42, 0.5);
  font-weight: 600;
}

.navbar-title {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: var(--color-text-primary);
}

.navbar-subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ghost-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(99, 102, 241, 0.25);
  background: rgba(255, 255, 255, 0.7);
  color: var(--color-text-primary);
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.25s ease, background-color 0.2s ease;
  box-shadow: 0 12px 28px -20px rgba(99, 102, 241, 0.45);
}

.ghost-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.95);
}

.ghost-btn i {
  color: rgba(99, 102, 241, 0.85);
}

.ghost-btn.danger {
  border-color: rgba(239, 68, 68, 0.25);
  box-shadow: 0 12px 28px -20px rgba(239, 68, 68, 0.45);
}

.ghost-btn.danger i {
  color: rgba(239, 68, 68, 0.9);
}

@media (max-width: 768px) {
  .navbar-shell {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-actions {
    width: 100%;
  }

  .ghost-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
