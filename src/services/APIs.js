import APIInstance from "./APIInstance";

export const GetProvinces = async () => {
  try {
    const response = await APIInstance.get('/provinces.json')

    return response
  } catch (error) {
    console.log(error)

    return []
  }
}

export const GetRegencies = async (payload) => {
  try {
    const response = await APIInstance.get(`/regencies/${payload}.json`)

    return response
  } catch (error) {
    console.log(error)

    return []
  }
}

export const GetDistricts = async (payload) => {
  try {
    const response = await APIInstance.get(`/districts/${payload}.json`)

    return response
  } catch (error) {
    console.log(error)

    return []
  }
}

export const GetVillages = async (payload) => {
  try {
    const response = await APIInstance.get(`/villages/${payload}.json`)

    return response
  } catch (error) {
    console.log(error)

    return []
  }
}