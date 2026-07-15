import api from './api'

export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders/', orderData)
    return response.data
  } catch (error) {
    console.error('Error creating order:', error)
    return null
  }
}

export const getOrders = async () => {
  try {
    const response = await api.get('/orders/')
    return response.data
  } catch (error) {
    console.error('Error fetching orders:', error)
    return []
  }
}

export const getOrderById = async (id) => {
  try {
    const response = await api.get(`/orders/${id}/`)
    return response.data
  } catch (error) {
    console.error('Error fetching order:', error)
    return null
  }
}
