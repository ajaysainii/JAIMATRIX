<template>
  <div class="mx-auto d-flex w-100 dashboard-body">
    <SidebarComponent />

    <div class="p-0 main-container">
      <NavbarComponent />
      <div class="container-fluid p-3">
        <div class="dashborad-header mb-3 mt-1 d-flex justify-content-between align-items-center">
          <b-breadcrumb :items="items" class="mb-0"></b-breadcrumb>
          <div>
            <button @click="forms" class="submit-btn mx-3">
              <i class="fas fa-plus"></i> Project
            </button>

            <Modal v-if="modalOpen" @close="closeModal" />

          </div>
        </div>
        <div v-if="myText === 'Active' && companyProfile?.length !== 0" class="dashboard_body my-2">
          <div class="card dash-cards">
            <div class="overflow-auto">
              <b-table id="my-table" :items="companyProfile" :fields="tableFields" :per-page="perPage"
                :current-page="currentPage" small>

                <template v-slot:cell(actions)="companyProfile">
                  <i class="fas fa-edit"
                    @click="goTocompanyProfile(companyProfile.item.profile_id, companyProfile.item.industry, myText = 'Active')"></i>
                </template>
              </b-table>
            </div>
          </div>
          <b-pagination class="float-end mt-3 mb-5 pb-3" v-model="currentPage" :per-page="perPage"
            :total-rows="companyProfile.length" aria-controls="my-table"></b-pagination>
        </div>

        <div class="nodata" v-if="companyProfile?.length === 0">
          <h4>Looks like we're starting fresh!</h4>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/Navbar.vue";
import SidebarComponent from "@/components/Sidebar.vue";
import Modal from "~/components/Modal.vue";

export default {
  name: "Dashboard",
  components: {
    NavbarComponent,
    SidebarComponent,
    Modal,
  },
  data() {
    return {
      myText: "Active",
      perPage: 11,
      currentPage: 1,
      users: [],
      user_id: "",
      companyProfile: [],
      companyProfileDraft: [],
      count: 0,
      Activecount: 0,
      tableFields: [
        { key: "json_data.project_name", label: "Project Name" },
        { key: "json_data.project_location", label: "Address" },
        { key: "json_data.promoters_name", label: "Promoter Name" },
        { key: "json_data.number_of_employees", label: "Employess" },
        { key: "json_data.start_year", label: "Start Year" },
        { key: "json_data.fund_name", label: "Fund Name" },
        { key: "actions", label: "Actions" },
      ],
      modalOpen: false,
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
    };
  },
  async mounted() {
    const dashboard1 = this.$route.query.id;
    const user_id = JSON.parse(localStorage.getItem("setUser")).user_id;
    var response = await this.$store.dispatch('getProjects')
    if (response) {
      this.users = response.data.data.ProjectProfile.map((e) => {

        try {
          e.json_data = JSON.parse(e.json_data)
          if (e.status === 'Active') {
            this.companyProfile.push(e);
            this.Activecount = this.companyProfile.length;
          }
          else if (e.status === 'Draft') {
            this.companyProfileDraft.push(e);
            this.count = this.companyProfileDraft.length;
          }
        } catch (error) {

        }
      }
      );
    }

  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    viewActive() {
      this.myText = "Active";
    },
    forms() {
      this.modalOpen = true;
    },
    goTocompanyProfile(id, industry, text) {
      if (industry === "General Industry") {
        this.$router.push({ name: "Forms", query: { id, industry, text } });
      }
      if (industry === "Energy Industry") {
        this.$router.push({ name: "EnergyForms", query: { id, industry, text } });
      }
      if (industry === "Venture Industry") {
        this.$router.push({ name: "VentureForms", query: { id, industry, text } });
      }
      if (industry === "VC Fund Industry") {
        this.$router.push({ name: "VcForms", query: { id, industry, text } });
      }
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>

<style scoped>
.nodata{
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    top: 50px;
}
.breadcrumb-item a {
  color: #919191;
  text-decoration: none;
}

.breadcrumb-item span {
  color: #000000;
}

.breadcrumb {
  line-height: 34px;
}

::-webkit-scrollbar {
  display: none;
}

.dashboard-body {
  height: 100vh !important;
  overflow-y: hidden !important;
}

/* .table {
  max-height: 600px !important;
  height: 600px;
} */
.dash-cards .b-table tbody tr:nth-child(even) {
  background-color: red !important;
}
</style>
