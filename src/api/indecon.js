import { API_URL } from "../utils/contants";

export async function getData() {
  try {
    const url = `${API_URL}/last`
    const response = await fetch(url)
    const  result = await response.json()
    return result
  } catch(error) {
    throw error
  }
}

export async function getDetail(key) {
  try {
    const url = `${API_URL}/values/${key}`
    const response = await fetch(url)
    const  result = await response.json()
    return result
  } catch(error) {
    throw error
  }
}
