// Interface
import CarItemInterface from "lib/interface/CarItemInterface"
import RentDataInterface from "lib/interface/RentDataInterface"

// Utils VAR
export const BASE_API_URL = "http://localhost:8000/api/v1/"

// Utils FUNCTION

/**
* Get Cars 
*
* Mendapatkan semua data dari
* table cars untuk beranda
*
* @returns status number
* @returns data CarItemInterface
*
*/
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

/**
* Get Car 
*
* Mendapatkan data dari
* table cars berdasarkan id
*
* @param id number
*
* @returns status number
* @returns data CarItemInterface
*
*/
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

/**
* Get Cars Dashboard
*
* Mendapatkan data dari
* table cars untuk halaman
* dashboard owner
*
* @param token string
*
* @returns status number
* @returns data CarItemInterface
*
*/
export const getUserCars = async (token: string) => {

  const req = await fetch(`${BASE_API_URL}car/owner`, {
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

/**
* Destroy Car
*
* Menghapus data dari
* table cars berdasarkan id
*
* @param token string
* @param id number
*
* @returns status number
* @returns message string
*
*/
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

/**
* Create Car
*
* Menambahkan data untuk
* table cars 
*
* @param token string
* @param data CarItemInterface
*
* @returns status number
* @returns message string
*
*/

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

/**
* Create Car
*
* Menambahkan data untuk
* table cars 
*
* @param token string
* @param data CarItemInterface
* @param id number
*
* @returns status number
* @returns message string
*
*/
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

export const getUserProfile = async (token: string) => {

  const req = await fetch(`${BASE_API_URL}user/profile`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: 'GET',
  })

  const res = await req.json()

  return {
    status: req.status,
    message: res.message,
    data: res.data
  }

}

/**
* Rent Car
*
* Tempat customer meminjam
* mobil yang diingingkan
*
* @param token string
* @param car_id number
* @param rentData RentDataInterface
*
* @returns status number
* @returns message string
*
*/
export const rentCar = async (token: string, car_id: number, rentData: RentDataInterface) => {

  const req = await fetch(`${BASE_API_URL}rent/car/${car_id}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(rentData)
  })

  const res = await req.json()

  return {
    status: req.status,
    message: res.message
  }

}

/**
* Rent Car List
*
* Kumpulan Data rent list car
* yang ingin disewa user
*
* @param token string
*
* @returns status number
* @returns data RentDataInterface
*
*/
export const rentList = async (token: string) => {

  const req = await fetch(`${BASE_API_URL}rent/rent-list`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: 'GET'
  })

  const res = await req.json()

  return {
    status: req.status,
    data: res.data
  }
}
