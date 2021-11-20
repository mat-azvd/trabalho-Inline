import api from '../lib/api'

async function login(cpf, senha) {
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login
}