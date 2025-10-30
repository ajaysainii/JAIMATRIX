<template>
  <div class="modal">
    <div class="modal-content text-center p-4">
      <!-- <div>
        <h2 class="text-warning">Your data has been lost</h2>
      </div>
      <div
        class="d-flex mt-4 justify-content-center align-items-center companyinfo flex-wrap"
      >
        <button @click="saveIndustry" type="button" class="submit-model">
          Ok
        </button>
        <button @click="closeModal" type="button" class="submit-Cancel">
          Cancel
        </button>
      </div> -->
      <img src="https://100dayscss.com/codepen/alert.png" class="mx-auto"  width="44" height="38" />
      <div class="my-2">
		<span class="title mb-2">Oh snap!</span>
        
		<p class="mb-0" >There are some unsaved changes that will be lost. Are you sure you want to proceed?</p>
       
    </div>
    <!-- <div class="button">    
        <button @click="saveIndustry" type="button" class="submit-model">
          Ok
        </button>
        <button @click="closeModal" type="button" class="submit-Cancel">
          Cancel
    </button>
    </div> -->
    <div
            class="d-flex w-100 my-4 justify-content-center align-items-center companyinfo"
          >
            <!-- <button
            @click="saveIndustry(selectCompany.company_id)"
              type="button"
              class="submit-model"
            >
              Ok
            </button> -->
            <button
            @click="closeModal"
              type="button"
              class="submit-Cancel w-25 mx-3 outline-btn"
            >
            Cancel
            </button>
            <button
            @click="saveIndustry"
              type="button"
              class="submit-model w-25"
            >
              Ok
            </button>
          </div>

    </div>
  </div>
</template>
    
  <script>
export default {
  name: "Cancelmodal",
  data() {
    return {
      companyData: {
        industry: "",
      },
    };
  },
  methods: {
    saveIndustry() {
      // code to save the project goes here
        this.$router.push('/Dashboard')
    //   if (this.companyData.industry === "General Industry") {
    //     this.$router.push("/Forms");
    //   }
    //   if (this.companyData.industry === "Energy Industry") {
    //     this.$router.push("/EnergyForms");
    //   }
    //   if (this.companyData.industry === "Venture Industry") {
    //     this.$router.push("/VentureForms");
    //   }
    //   if (this.companyData.industry === "VC Fund Industry") {
    //     this.$router.push("/VentureForms");
    //   }
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
  
  <style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  /* padding: 20px; */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  /* max-height: 80vh; */
  /* overflow-y: auto; */
  /* margin-bottom:20px ;
  height: 330px; */

}
/* .submit-model {
  padding: 0.8rem 1.5rem;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 20px;
  background: #0067ff;
  box-shadow: 0px 4px 19px rgba(30, 99, 233, 0.3);
  float: right;
  width: 100%;
  border: 1px solid #0067ff;
} */

.form-select {
  padding: 0.9rem !important;
  border: 1px solid #0077ff !important;
  border-radius: 10px !important;
  font-size: 1rem !important;
  width: 452px;
  /* margin-bottom: 20px; */
}

/* .submit-Cancel {
  padding: 0.8rem 1.5rem;
  border: none;
  color: #0067ff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 20px;
  box-shadow: 0px 2px 5px rgb(30 99 233 / 30%);
  float: right;
  background: #fff;
  border: 1px solid #0077ff !important;
  width: 100%;
} */

.modal img {
  margin-top: 18px;
}
.modal .title {
  display: block;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color:#707070;
  /* margin: 14px 0 5px 0; */
}
.modal p {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #484848;
}
.submit-model, .outline-btn{
  font-size: 0.9rem;
  box-shadow: none !important;
}
/* .modal .button {
    position: absolute;
    height: auto;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #3F3F3F;
  color: #415868;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.modal {
  position: absolute;
  width: 280px;
  height: 210px;
  top: 95px;
  left: 60px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.4);
  text-align: center;
  overflow: hidden;
  -webkit-animation: show-modal 0.7s ease-in-out;
          animation: show-modal 0.7s ease-in-out;
}
.modal.hide {
  -webkit-animation: hide-modal 0.6s ease-in-out both;
          animation: hide-modal 0.6s ease-in-out both;
}


@-webkit-keyframes show-modal {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes show-modal {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes hide-modal {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes hide-modal {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
} */
</style>
    