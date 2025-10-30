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
/* .active {
    background-color: white; 
} */
.dropdown-sec {
    cursor: pointer;
    background: #EEEEEE;
    border: 0.5px solid #9191914D;
    border-radius: 5px;
}

.dropdown-sec[aria-expanded="true"] {
    background: #EEEEEE;
    border: 0.5px solid #9191914D;
    border-radius: 5px;
}

.user-details h6,
.user-details p {
    color: #484848;
}

.user-details h6 {
    font-weight: 500;
    font-size: 14px !important;
    line-height: 20px;
    letter-spacing: 0;
}

.user-details p {
    font-weight: 400;
    font-size: 15px !important;
}

.float-right {
    float: right;
    margin-right: 0 !important;
    font-size: 16px;
    font-weight: bolder;
    color: #000000;
}

hr {
    border: 1px solid #70707085;
    margin-bottom: 0;
}

.dropdown-section {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    height: 50px;
    transition: height 0.2s ease-in-out;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.dropdown-section.open {
    height: auto;
}

.project-proposal-text>img {
    margin-right: 15px;
    width: 20px;
}

.profile-dropdown .project-proposal-text>img {
    width: 18px;
}

.dropdown-list {
    padding-left: 20px;
}

.dropdown-icon {
    vertical-align: middle;
    margin-right: 7px;
    /* Add some spacing between the icon and text */
}

.dropdown-icon img {
    width: 10px;
    margin-bottom: 5px;
}

.first-li,
.second-li,
.third-li {
    margin-bottom: 3px;
    padding-left: 3rem;
    border-radius: 5px;
}

.first-li,
.first-li:hover {
    background-color: #FAF4E6;
    color: #E9AB2D;
}

.second-li,
.second-li:hover {
    background-color: #E6F6ED;
    color: #28C76F;
}

.third-li,
.third-li:hover {
    background-color: #FAE4E5;
    color: #ED1C24;
}

.icon-badge-container {
    position: relative;
    display: inline-block;
}

.icon-badge {
    position: absolute;
    right: -10px;
    color: white;
    border-radius: 50%;
    font-size: 11px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
}

.first-li .icon-badge {
    background: #e9ab2d;
}

.second-li .icon-badge {
    background: #28c76f;
}

.third-li .icon-badge {
    background: #ed1c24;
}

.cat-dropdown {
    cursor: pointer;
    padding: 9px 10px !important;
}

.cat-dropdown.active,
.cat-dropdown:active,
.cat-dropdown:hover {
    background: #F2F6FA;
    color: #1D1F1F;
    box-shadow: 0px 3px 5px rgba(124, 124, 124, 0.15);
}

.project-proposal-text {
    font-size: 13px;
    line-height: 19px;
}
.filter-icon {
    width: 30px;
    height: 30px;
    padding: 5px;
    background: transparent;
    border-radius: 22px;
    box-shadow: none;
}

.filter-icon:hover {
    background: #DCDCDC;
    box-shadow: 0px 0px 6px #0000003D;
    border: 1px solid #FFFFFF;
    border-radius: 22px;
    width: 30px;
    height: 30px;
    padding: 5px;
    transition: 0.3s ease-out;
}

.profile-dropdown li:hover {
    background: #fff;
    border-radius: 5px;
}
</style>
