// Interface
import CarItemInterface from "lib/interface/CarItemInterface"

// Utils VAR
export const BASE_API_URL = "http://localhost:8000/api/v1/"

// Utils FUNCTION
export const getCars = async () => {

  const req = await fetch(BASE_API_URL + 'car', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })

  const res = await req.json()

  return {
    status: req.status,
    data: res.data ?? []
  }

}

export const getSingleCar = async (id: any) => {

  const req = await fetch(`${BASE_API_URL}car/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })

  const res = await req.json()

  return {
    status: req.status,
    data: res.data ?? []
  }

}

export const getUserCars = async (token: string) => {

  const req = await fetch(`${BASE_API_URL}car/user`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const res = await req.json()

  return {
    status: req.status,
    data: res.data ?? []
  }

}

export const destroyCar = async (id: number, token: string) => {

  const req = await fetch(`${BASE_API_URL}car/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const res = await req.json()

  return {
    status: req.status,
    message: res.message
  }

}

export const createCar = async (token: string, data: CarItemInterface) => {

  const req = await fetch(`${BASE_API_URL}car/create`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })

  const res = await req.json()

  return {
    status: req.status,
    message: res.message
  }
}

export const editCar = async (token: string, data: CarItemInterface, id: number) => {

  const req = await fetch(`${BASE_API_URL}car/edit/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  })


  const res = await req.json()

  return {
    status: req.status,
    message: res.message
  }
}
