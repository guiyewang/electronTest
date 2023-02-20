import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


//引入UI组件库
import {
  // create naive ui
  create,
  // component
  NButton,NInputGroup,NInput
} from 'naive-ui'

const naive = create({
  components: [NButton,NInputGroup,NInput]
})


const app =  createApp(App)
app.use(naive)
app.mount('#app')
