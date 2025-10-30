<template>
    <div class="navbar-das">
        <div class="container-fluid px-2">
            <div>
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
    .search-input {
    box-shadow: 1px 2px 2px 2px #FCFCFC;
    padding: 0px 10px;
    margin-right:auto;
    width: 400px;
    background-color: white;
    border-radius: 10px;

}
.search-input input {
    border: none;
    padding: 10px;
    font-size: 14px;
    width: 90%;
}
.search-icon {
    cursor: pointer;
    font-size: 14px;
    color: var(--btn-golden);
}
.search-input input:focus {
    border: none !important;
    outline: none;
}
.breadcrumb-item a{
    color:#919191;
    text-decoration: none;
}
.breadcrumb-item span{
    color:#000000;
}
.breadcrumb{
    line-height: 34px;
}
</style>
