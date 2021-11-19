import api from '../lib/api'

async function login (cpf, senha) {
  try {
    const { data } = await api.post('/auth', {
      cpf,
      senha
    })

    window.localStorage.setItem('token', data.token)
  } catch (error) {
    throw error.response.data
  }
}

export default {
  login
}