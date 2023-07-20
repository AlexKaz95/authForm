<template>
  <div class="centered-block">
    <form @submit.prevent="submit">
      <div class="input-container" v-for="fieldConfig in formConfig">
        <label :for="fieldConfig.id">{{ fieldConfig.label }}</label>
        <input 
          :type="fieldConfig.type" 
          v-model="fieldConfig.model" 
          :class="inputClass(fieldConfig)" 
          @blur="fieldConfig.blur"
        />
        <Alert :errors="fieldConfig.errors"/>
      </div>
      <button type="submit" class="submit-btn">Отправить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm } from '../composables/useForm';
import { InputConfig } from './types';
import { minLength, required } from './validators';
import Alert from './Alert.vue';

  const formConfig: InputConfig<string>[] = useForm({
    email: {
      label: 'Электронная почта',
      type: 'email',
      id: 'email',
      initValue: '',
      validators: {
        required
      }
    },
    password: {
      label: 'Пароль',
      type: 'password',
      id: 'password',
      initValue: '',
      validators: {
        required, 
        minLength: minLength(8)
      }
    }
  });

  const submit = () => {
    console.log('submited');
  }

  const inputClass = computed(() => {
    return <T>(fieldConfig: InputConfig<T>) => ({
      invalid: !fieldConfig.valid && fieldConfig.touched, 
      valid: fieldConfig.valid && fieldConfig.touched
    });
  })
</script>

<style scoped>
.centered-block{
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 20px;
}
.input-container input{
  outline: none;
}

.invalid{
  border-color: red;
}
.valid{
  border-color: green;
}

.input-container label{
  display: block;
  margin-bottom: 4px;
}

.submit-btn{

}
</style>