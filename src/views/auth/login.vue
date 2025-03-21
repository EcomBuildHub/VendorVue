<template>
  <div class="login-form">
    <p>Login Form</p>
    <div class="flex flex-row">
      <TextField
         name="email"
         placeholder="Enter your email"
         id="email"
         v-model="email">
      </TextField> 
      <TextField type="password" name="password" placeholder="Enter your password" id="password" v-model="password"></TextField>
    </div>
    <button type="submit" class="button" @click="login()">Login</button>
  </div>
</template>

<script setup>
  import TextField from '@/components/TextField.vue';
  import axios from 'axios';
  import { ref, getCurrentInstance } from 'vue';
  const currentInstance = getCurrentInstance();
  const $session = currentInstance.appContext.config.globalProperties.$session;
  const email =  ref('');
  const password =  ref('');
  const vendor = [];

  const login = () => {
    const data = {
      email : email.value,
      password: password.value
    }

    axios.post('vendor/login', data)
    .then(function(res) {
      if (res.status === 200) {
        vendor.value = res.data.result;
        if(res.data.result && res.data.result.isFirstLogin == 0)
        {
          $session.set('token', res.data.result.token);
          $session.set('email', res.data.result.email);
          $session.set('name', res.data.result.name);
          console.log($session.get('token'), $session.get('email'), $session.get('name'));
        }
      }
    }).catch(function(res) {

    });
  }
  const updatePassword = () => {
    console.log('update password');
  }
</script>

<style scoped>
/* Center the form within the viewport */
.login-form {
  background-color: whitesmoke;
  padding: 20px;
  width: 600px;
  height: auto; /* Let the height adjust to the content */
  border-radius: 10px;
  text-align: center;

  /* Centering */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Make input fields responsive inside the form */
/* :deep(input#email) {
    height: 40px;
} */

.flex {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Add space between fields */
}

/* Optional: Style for the text */
p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.button {
  margin-top: 10px;
}
</style>
