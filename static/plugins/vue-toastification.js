import Vue from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

Vue.use(Toast, {
  timeout: 3000, // Duration of each toast message in milliseconds
  position: 'bottom-right', // Position of the toast message on the screen
  hideProgressBar: true, // Hide the progress bar on the toast message
  closeOnClick: false, // Disable the ability to close the toast message by clicking on it
  pauseOnFocusLoss: true, // Pause the timer when the user clicks outside of the toast message
  pauseOnHover: true, // Pause the timer when the user hovers over the toast message
  draggable: true, // Allow the user to drag the toast message around the screen
  draggablePercent: 0.7, // Percentage of the screen width the user can drag the toast message
  showCloseButtonOnHover: false, // Show the close button on the toast message only when the user hovers over it
  icon: false, // Disable the icon on the toast message
  rtl: false // Enable right-to-left language support
})
