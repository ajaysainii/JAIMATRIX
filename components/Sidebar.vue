<template>
    <div class="sidebar ">
        <div class="sidebar-header text-start">
            <img src="/assets/jaim_logo.png" alt="sidebar logo">
        </div>
        <div class="mx-3 px-3 py-2 dropdown-sec">
            <ul class="list-unstyled mb-0">
                <li :class="{ active: isActiveTab('ProjectList') }" @click="toggleProfile">
                    <span class="project-proposal-text d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="user-image">
                                <img src="/assets/Status.png" alt="">
                            </div>
                            <div>
                                <h6 class="mb-0">{{ username }}</h6>
                                <p class="mb-0">Fundraiser</p>
                            </div>
                        </div>
                        <b-icon icon="filter" class="float-right mt-1 filter-icon"></b-icon>
                    </span>
                </li>
                <b-collapse class="mt-1 py-1" v-model="logoutshow">
                    <ul class="profile-dropdown ps-0">
                        <li class="my-1 py-1 px-2" @click="showProfile">
                            <span class="project-proposal-text">
                                <img src="/assets/profileicon.svg" alt="profileicon">
                                My Profile</span>
                        </li>
                        <li class="my-1 py-1 px-2" @click="logout">
                            <span class="project-proposal-text">
                                <img src="/assets/logout.svg" alt="logout">
                                Logout</span>
                        </li>
                    </ul>
                </b-collapse>
            </ul>
        </div>
        <hr />
        <div class="sidebar-list">
            <h6 class="mb-3">Pages</h6>
            <ul class="list-unstyled">
                <li :class="{ active: isActiveTab('Dashboard') }" @click="Companies()">
                    <span>
                        <img src="/assets/companies.svg" alt="companies">
                    </span> Companies
                </li>

                <li :class="{ active: isActiveTab('ProjectList') }" @click="toggleDropdown" class="mb-2 side-dropdown">
                    <span class="project-proposal-text">
                        <img src="/assets/projects.svg" alt="">
                        Project Proposal
                        <b-icon :icon="isDropdownOpen ? 'chevron-down' : 'chevron-right'"
                            class="float-right mt-1"></b-icon>
                    </span>
                </li>
                <b-collapse v-model="isDropdownOpen">
                    <ul class="praposal-dropdown ps-0">
                        <li class="first-li" @click="goToDraftProject">
                            <span class="dropdown-icon project-proposal-text">
                                <img src="/assets/draft.svg" alt="draft">
                                Draft
                                <div class="icon-badge-container float-right">
                                    <span class="icon-badge">{{ draftProjectCount }}</span>
                                </div>
                            </span>
                        </li>
                        <li class="second-li" @click="projectDashboard">
                            <span class="dropdown-icon project-proposal-text">
                                <img src="/assets/active.svg" alt="active">
                                Submitted
                                <div class="icon-badge-container float-right">
                                    <span class="icon-badge">{{ activeProductsCount }}</span>
                                </div>
                            </span>
                        </li>
                        <!-- <li class="third-li">
                            <span class="dropdown-icon project-proposal-text">
                                <img src="/assets/closed.svg" alt="closed">
                                Closed
                                <div class="icon-badge-container float-right">
                                    <span class="icon-badge">0</span>
                                </div>
                            </span>
                        </li> -->
                    </ul>
                </b-collapse>
            </ul>
        </div>
    </div>
</template>

<script>
import  {mapState} from 'vuex'

export default {
    name: 'SidebarComponent',
    data() {
        return {
            isDropdownOpen: false,
            logoutshow: false,
            username: ''
        };
    },
    mounted(){
      this.$store.dispatch('getProjects')
      var data =  JSON.parse(localStorage.getItem("setUser"))
      this.username =  data.username
    },
    computed:{
        ...mapState(['activeProductsCount', 'draftProjectCount']),
    },
    methods: {
        Companies() {
            this.$router.push('/Dashboard');
        },
        projectDashboard() {
            this.$router.push('/ProjectList');
        },
        goToDraftProject(){
            this.$router.push('/draft-project')
        },
        isActiveTab(routeName) {
            return this.$route.name === routeName;
        },
        handleDropdownClick() {
            this.isOpen = !this.isOpen;
        },
        showProfile() {
            this.$router.push('/Profile')        
        },
        logout() {
            localStorage.clear();
            this.$router.push('/');
            this.$toast.success('Successfully Logout')
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleProfile(){
            this.logoutshow = !this.logoutshow;
        }
    }
}
</script>

<style scoped>
.dropdown-sec {
  cursor: pointer;
  transition: background 0.25s ease, border 0.25s ease, transform 0.2s ease;
}

.dropdown-sec:hover,
.dropdown-sec[aria-expanded="true"] {
  transform: translateY(-2px);
}

.user-image {
  width: 48px;
  height: 48px;
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.18);
  display: grid;
  place-items: center;
  margin-right: 16px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.user-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-proposal-text {
  font-size: 0.95rem;
  line-height: 1.35;
}

.profile-dropdown,
.praposal-dropdown {
  padding-top: 12px;
}

.profile-dropdown li,
.praposal-dropdown li {
  padding: 10px 14px;
  border-radius: 14px;
  transition: background 0.2s ease, transform 0.2s ease;
}

.profile-dropdown li:hover,
.praposal-dropdown li:hover {
  background: rgba(148, 163, 184, 0.12);
  transform: translateX(6px);
}

.first-li,
.second-li,
.third-li {
  margin-bottom: 6px;
  padding-left: 2.6rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.first-li::before,
.second-li::before,
.third-li::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.85;
}

.first-li,
.first-li::before {
  background: linear-gradient(135deg, rgba(250, 204, 21, 0.18), rgba(249, 115, 22, 0.22));
  color: #fbbf24;
}

.second-li,
.second-li::before {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(16, 185, 129, 0.24));
  color: #4ade80;
}

.third-li,
.third-li::before {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.18), rgba(244, 114, 182, 0.22));
  color: #f87171;
}

.first-li::before,
.second-li::before,
.third-li::before {
  border-radius: 16px;
  pointer-events: none;
}

.first-li span,
.second-li span,
.third-li span {
  position: relative;
  z-index: 1;
  color: rgba(15, 23, 42, 0.85);
  font-weight: 600;
}

.icon-badge-container {
  position: relative;
  display: inline-flex;
}

.icon-badge {
  position: absolute;
  right: -12px;
  top: -4px;
  width: 26px;
  height: 26px;
  font-size: 0.75rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 18px -12px rgba(15, 23, 42, 0.55);
}

.first-li .icon-badge {
  color: #c2410c;
}

.second-li .icon-badge {
  color: #166534;
}

.third-li .icon-badge {
  color: #b91c1c;
}

.filter-icon {
  width: 32px;
  height: 32px;
  padding: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.12);
  transition: background 0.2s ease;
}

.filter-icon:hover {
  background: rgba(148, 163, 184, 0.25);
}
</style>
