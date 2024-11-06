<!-- SCRIPT -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const contas = JSON.parse(localStorage.getItem('contas')) || []
const route = useRoute()
const router = useRouter()
const index = route.params.index

const conta = ref(null)
const parcelas = ref([])

onMounted(() => {
  try {
    conta.value = contas[index]

    if (conta.value) {
      const valorParcela = conta.value.valor / conta.value.parcelas
      const primeiraData = new Date(conta.value.dataVencimento)

      for (let i = 0; i < conta.value.parcelas; i++) {
        const dataParcela = new Date(
          Date.UTC(
            primeiraData.getUTCFullYear(),
            primeiraData.getUTCMonth() + i,
            primeiraData.getUTCDate(),
          ),
        )

        parcelas.value.push({
          valor: valorParcela,
          dataVencimento: dataParcela.toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        })
      }
    }
  } catch (error) {
    console.error('Erro ao carregar os dados:', error)
  }
})

const voltarParaListagem = () => {
  router.push('/listagem-contas')
}
</script>

<!-- HTML -->
<template>
  <div v-if="conta" class="detalhamento-container">
    <h2>{{ conta.nome }} - Parcelas</h2>
    <div class="table-header">
      <span>Parcela</span>
      <span>Valor</span>
      <span>Vencimento</span>
    </div>
    <div v-for="(parcela, index) in parcelas" :key="index" class="parcela-item">
      <span>{{ index + 1 }}</span>
      <span>R$ {{ parcela.valor.toFixed(2) }}</span>
      <span>{{ parcela.dataVencimento }}</span>
    </div>
    <button class="back-button" @click="voltarParaListagem">Voltar para Listagem</button>
  </div>
  <div v-else class="error-message">
    <p>Erro: Não foi possível carregar os dados da conta.</p>
  </div>
</template>

<!-- CSS -->
<style scoped>
body {
  background-color: #1a1c1b;
}

.detalhamento-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2rem;
  border: 2px solid #0a0b0d;
  border-radius: 10px;
  background-color: #131313;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: #97949e;
  font-weight: bold;
  width: 100%;
  max-width: none;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  color: #11ce5e;
  font-weight: bold;
}

.table-header,
.parcela-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #333;
  font-weight: bold;
}

.table-header {
  background-color: transparent;
}

.parcela-item {
  background-color: #2c2c2e;
  border-radius: 5px;
  margin-bottom: 1rem;
}

span {
  text-align: center;
  font-weight: bold;
}

.back-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #11ce5e;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 50%;
  align-self: center;
}

.error-message {
  text-align: center;
  color: #f00;
  margin-top: 2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .table-header,
  .parcela-item {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  .back-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .detalhamento-container {
    padding: 1rem;
  }

  .table-header,
  .parcela-item {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  span {
    font-size: 0.85rem;
  }

  .back-button {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}
</style>
