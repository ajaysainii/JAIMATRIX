export default function ({ store, redirect, context }) {
    const token = localStorage.getItem('setAuthToken');
    const user = localStorage.getItem('setUser');
    if(token){
    }else if(!store.state.authenticated){
        return redirect('/')
    }
  }
