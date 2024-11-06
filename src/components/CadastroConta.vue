<!-- SCRIPT -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref({
  nome: '',
  valor: '',
  parcelas: '',
  dataVencimento: '',
})

const router = useRouter()

const handleSubmit = () => {
  let contas = JSON.parse(localStorage.getItem('contas')) || []
  contas.push(form.value)
  localStorage.setItem('contas', JSON.stringify(contas))
  router.push('/listagem-contas')
}
</script>

<!-- HTML -->
<template>
  <div class="form-container">
    <h2>Cadastro de Conta</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="form.nome" required />
      </div>
      <div class="form-group">
        <label for="valor">Valor:</label>
        <input type="number" id="valor" v-model="form.valor" required />
      </div>
      <div class="form-group">
        <label for="parcelas">Quantidade de Parcelas:</label>
        <input type="number" id="parcelas" v-model="form.parcelas" required />
      </div>
      <div class="form-group">
        <label for="dataVencimento">Vencimento 1° Parcela:</label>
        <input type="date" id="dataVencimento" v-model="form.dataVencimento" required />
      </div>
      <button type="submit" class="btn-submit">Cadastrar</button>
    </form>
  </div>
</template>

<!-- CSS -->
<style scoped>
body {
  background-color: #1a1c1b;
}

input {
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2c2c2e;
  color: #97949e;
  outline: none;
  font-size: 1rem;
  width: 100%;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border: 2px solid #0a0b0d;
  border-radius: 10px;
  background-color: #131313;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: #97949e;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  color: #11ce5e;
  font-weight: bold;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}

label {
  margin-bottom: 0.5rem;
  color: #97949e;
  font-weight: bold;
}

.btn-submit {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #11ce5e;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  width: 50%;
  text-align: center;
  transition: background-color 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .form-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1rem;
  }
}
</style>
