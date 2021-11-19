import api from '../lib/api'

async function login (login, senha) {
  console.log(api.post, login, senha)
  const { data } = await api.post('/login', {
    login,
    senha
  })

  window.localStorage.setItem('token', data.token)
}

export default {
  login
}