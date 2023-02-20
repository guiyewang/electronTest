<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'


const keyWord = ref("搜索内容")
async function onSearch(){
    let result = await axios.get(`https://new.shuge.org/?s=${keyWord}`)

  console.log(result);
  
 
}


</script>

<template>
    <n-input-group>
      <n-input :style="{ width: '50%' }"  :keyWord="keyWord"/>
      <n-button type="primary" ghost @click="onSearch">
        搜索
      </n-button>
    </n-input-group>
</template>


