import api from './api'

export const login = async (email, password) => {
  try {
    const response = await api.post('/token/', { email, password })
    localStorage.setItem('access_token', response.data.access)
    localStorage.setItem('refresh_token', response.data.refresh)
    return response.data
  } catch (error) {
    console.error('Login error:', error)
    return null
  }
}

export const register = async (userData) => {
  try {
    const response = await api.post('/users/', userData)
    return response.data
  } catch (error) {
    console.error('Registration error:', error)
    return null
  }
}

export const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user') || 'null')
}