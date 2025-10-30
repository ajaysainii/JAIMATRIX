<template>
  <div class="mx-auto d-flex w-100 dashboard-body">
    <SidebarComponent />

    <div class="p-0 main-container">
      <NavbarComponent />
      <div class="container-fluid p-3">
        <div class="dashborad-header mb-3 mt-1 d-flex justify-content-between align-items-center">
          <b-breadcrumb :headings="headings" class="mb-0"></b-breadcrumb>
          <div>
            <button class="submit-btn-compnay mx-3" @click="openform">
              <i class="fas fa-plus"></i> Company
            </button>
          </div>
        </div>
        <companyInfoModal v-if="modalOpen" @close="closeform" />
        <companyInfoModal v-if="editModal" :companyId="companyId" @close="closeform" />
        <companyDetail v-if="detailModal" :companyId="companyId" @close="closeform" />
        <div v-if="!company_list" class="d-flex justify-content-center align-items-center">
          <span class="loader"></span>
        </div>
        <div class="dashboard_body my-2" v-if="company_list?.length > 0">
          <div class="card dash-cards">
            <div class="overflow-auto">
              <b-table id="my-table" :items="company_list" :fields="tableFields" :per-page="perPage"
                :current-page="currentPage" small>
                <template v-slot:cell(name)="row">
                  <a class="nameclick" @click="goTocompanyProfile(row.item.company_id)">
                    {{ row.item.name }}
                  </a>
                </template>
                <template v-slot:cell(actions)="company_list">
                  <i class="fas fa-edit" @click="goTocompanyProfile(company_list.item.company_id)"></i>
                </template>
              </b-table>
            </div>
          </div>
          <b-pagination class="float-end  mt-3 mb-5 pb-3" v-model="currentPage" :per-page="perPage"
            :total-rows="company_list.length" aria-controls="my-table"></b-pagination>
        </div>

        <div class="nodata" v-if="company_list?.length === 0">
          <h4>Looks like we're starting fresh!</h4>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import authenticated from '@/middleware/authenticated'

import NavbarComponent from "@/components/Navbar.vue"
import SidebarComponent from "@/components/Sidebar.vue"
import Modal from '~/components/Modal.vue';
import { mapState } from 'vuex'

export default {
  name: "Dashboard",
  middleware: [authenticated],
  components: {
    NavbarComponent,
    SidebarComponent,
    Modal
  },
  data() {
    return {
      myText: 'Active',
      perPage: 11,
      currentPage: 1,
      users: [],
      user_id: "",
      // companyProfile: [],
      tableFields: [
        { key: 'name', label: 'Company Name'},
        { key: 'subindustry', label: 'SubIndustry' },
        { key: 'website', label: 'Website' },
        { key: 'industry', label: 'Industry' },
        { key: 'founded_year', label: 'Year' },
        { key: 'address', label: 'Address' },
        { key: "actions", label: "Actions" },
      ],
      modalOpen: false,
      editModal:false,
      detailModal: false,
      headings:[
        {
            text: 'Companies',
          },
      ]
    }
  },
  created() {
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeTab = parseInt(tab);
    }
  },
  computed: {
    ...mapState(['company_list']),
    rows() {
      return this.items.length
    }
  },
  mounted() {
     this.$store.dispatch('getCompnies'); 
  },
  methods: {
    openform() {
      this.modalOpen = true;
    },
    closeform(){
      this.modalOpen = false
      this.editModal = false
      this.detailModal = false
    },
    viewDraft() {
      this.myText = 'Draft';
    },
    viewActive() {
      this.myText = 'Active';
    },
    comapnyForm() {
      const industry = JSON.parse(localStorage.getItem('setUser')).industry;
      if (industry === 'General Industry') {
        this.$router.push({ name: "CompanyInformation" });
      }
      if (industry === 'Energy Industry') {
        this.$router.push({ name: "EnergyInformation" });
      }
      if (industry === 'Venture Industry') {
        this.$router.push({ name: "VentureInformation" });
      }
      if (industry === 'VC Fund Industry') {
        this.$router.push({ name: "VcInformation" });
      }
    },
    goTocompanyProfile(id) {
      this.companyId = id 
      this.editModal = true

      // const industry = JSON.parse(localStorage.getItem('setUser')).industry;

      // if (industry === 'General Industry') {
      //   this.$router.push({ name: "CompanyInformation", query: { id } });
      // }
      // if (industry === 'Energy Industry') {
      //   this.$router.push({ name: "EnergyInformation", query: { id } });
      // }
      // if (industry === 'Venture Industry') {
      //   this.$router.push({ name: "VentureInformation", query: { id } });
      // }
      // if (industry === 'VC Fund Industry') {
      //   this.$router.push({ name: "VcInformation", query: { id } });
      // }

    },
    viewCompanyDetails(id){
      this.companyId = id
      this.detailModal =true
    }
  }

};
</script>

<style scoped>
.nameclick {
  cursor: pointer;
  text-decoration: none;
  color: #484848;
}
.nodata{
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    top: 50px;
}

::-webkit-scrollbar {
  display: none;
}
.table {
  /* max-height: 600px !important; */
  /* height: 600px; */
}
.dashboard-body {
  height: 100vh !important;
  overflow-y: hidden !important;
}

@media only screen and (min-width: 1400px) and (max-width:1500px) {

  .container-fluid.p-5 {
    padding: 2rem !important;
  }

  /* .dashboard-body {
    padding: 1rem 0 1rem 1rem;

  } */

  .das-Heading {
    font-size: 1.7rem;
  }

  .submit-btn.mx-3 {
    margin: 0;
  }
}

</style>