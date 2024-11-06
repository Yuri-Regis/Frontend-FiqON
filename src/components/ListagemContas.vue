<!-- SCRIPT -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const contas = ref(JSON.parse(localStorage.getItem('contas')) || [])
const router = useRouter()

const verParcelas = (index) => {
  router.push({ name: 'DetalhamentoParcelas', params: { index } })
}

const adicionarNovaConta = () => {
  router.push('/')
}

const formatarData = (data) => {
  const date = new Date(data)
  const dia = String(date.getDate()).padStart(2, '0')
  const mes = String(date.getMonth() + 1).padStart(2, '0')
  const ano = date.getFullYear()
  return `${dia}/${mes}/${ano}`
}
</script>

<!-- HTML -->
<template>
  <div class="listagem-container">
    <h2>Listagem de Contas</h2>
    <div class="table-header">
      <span>Nome</span>
      <span>Valor</span>
      <span>Parcelas</span>
      <span>1º Vencimento</span>
      <span></span>
    </div>
    <div v-for="(conta, index) in contas" :key="index" class="conta-item">
      <span>{{ conta.nome }}</span>
      <span>R$ {{ conta.valor.toFixed(2) }}</span>
      <span>{{ conta.parcelas }}</span>
      <span>{{ formatarData(conta.dataVencimento) }}</span>
      <button @click="verParcelas(index)">Ver Parcelas</button>
    </div>
    <button class="add-button" @click="adicionarNovaConta">+</button>
  </div>
</template>

<!-- CSS -->
<style scoped>
body {
  font-weight: bold;
  background-color: #1a1c1b;
}

.listagem-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid #0a0b0d;
  border-radius: 10px;
  background-color: #131313;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: #97949e;
  font-weight: bold;
  width: 100%;
  max-width: none;
  min-width: 0;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  color: #11ce5e;
  font-weight: bold;
}

.table-header,
.conta-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr 1fr;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #0a0b0d;
  background-color: #2c2c2e;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-weight: bold;
}

.table-header {
  background-color: transparent;
}

.table-header span,
.conta-item span {
  font-weight: bold;
}

button {
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #11ce5e;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #444;
}

.add-button {
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #11ce5e;
  color: #000;
  font-weight: bold;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: #444;
}

@media (max-width: 768px) {
  .table-header,
  .conta-item {
    grid-template-columns: 2fr 1fr 1fr 1.5fr 1fr;
    gap: 0.5rem;
  }

  .add-button {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .listagem-container {
    padding: 1rem;
  }

  .table-header,
  .conta-item {
    grid-template-columns: 2fr 1fr 1fr 1.5fr 1fr;
    text-align: center;
    gap: 0.5rem;
  }

  button {
    font-size: 0.85rem;
    padding: 0.2rem 0.5rem;
  }

  .add-button {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
