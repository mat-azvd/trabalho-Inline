import api from '../lib/api'

async function loggedUser (payload) {
  try {
    const { data } = await api.post('/usuarios/logado', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function create (payload) {
  try {
    const { data } = await api.post('/usuarios', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function update (payload) {
  try {
    const { data } = await api.put('/usuarios', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

export default {
  loggedUser,
  create,
  update
}