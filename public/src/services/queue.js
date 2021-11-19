import api from '../lib/api'

async function create (payload) {
  try {
    const { data } = await api.post('/filas', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function resume (queueId) {
  try {
    const { data } = await api.put(`/filas/${queueId}/retomar`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function pause (queueId) {
  try {
    const { data } = await api.put(`/filas/${queueId}/pausar`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function enter (code) {
  try {
    const { data } = await api.post(`/usuarios-fila/${code}/ingressar`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function toMeet (queueId, userId) {
  try {
    const { data } = await api.post(`/usuarios-fila/${queueId}/atender/${userId}`)

    return data
  } catch (error) {
    throw error.response.data
  }
}

export default {
  create,
  resume,
  enter,
  pause,
  toMeet
}