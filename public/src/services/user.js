import api from '../lib/api'

async function getLoggedUser(payload) {
  try {
    const { data } = await api.get('/usuarios/logado', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function create(payload) {
  try {
    const { data } = await api.post('/usuarios', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function update(userId, payload) {
  try {
    const { data } = await api.put(`/usuarios/${userId}`, payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoggedUser,
  create,
  update
}