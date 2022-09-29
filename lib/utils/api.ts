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
