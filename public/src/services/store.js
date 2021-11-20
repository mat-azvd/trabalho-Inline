import api from '../lib/api'

async function create(payload) {
  try {
    const { data } = await api.post('/lojas', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}

async function update(payload) {
  try {
    const { data } = await api.put('/lojas', payload)

    return data
  } catch (error) {
    throw error.response.data
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  update
}