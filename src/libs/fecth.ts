import axiosClient from './axios'

export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosClient.get<T>(url);
    const { data } = response
    return data
  } catch (error: unknown) {
    throw error
  }
}
