import api from '../lib/api'

async function create(payload) {
  try {
    const { data } = await api.post('/filas', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function get(queueId) {
  try {
    const { data } = await api.get(`/filas/${queueId}`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function list() {
  try {
    const { data } = await api.get(`/filas`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function getInfoUser(queueId) {
  try {
    const { data } = await api.get(`/usuarios-fila/${queueId}`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function resume(queueId) {
  try {
    const { data } = await api.put(`/filas/${queueId}/retomar`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function pause(queueId) {
  try {
    const { data } = await api.put(`/filas/${queueId}/pausar`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function enter(code) {
  try {
    const { data } = await api.post(`/usuarios-fila/${code}/ingressar`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function toMeet(queueId, userId) {
  try {
    const { data } = await api.post(`/usuarios-fila/${queueId}/atender/${userId}`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function exit(queueId) {
  try {
    const { data } = await api.delete(`/usuarios-fila/${queueId}/sair`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function remover (queueId,userId) {
  try {
    const { data } = await api.delete(`/usuarios-fila/${queueId}/remover/${userId}`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  resume,
  enter,
  exit,
  pause,
  toMeet,
  getInfoUser,
  get,
  list,
  remover
}