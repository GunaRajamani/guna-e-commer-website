import api from './api'

export const getProducts = async (params = {}) => {
  try {
    const response = await api.get('/products/', { params })
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get('/products/categories/')
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}