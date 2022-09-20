// Interface
import LoginDataInterface from "lib/interface/LoginDataInterface"
import RegisterDataInterface from "lib/interface/RegisterDataInterface"

const BASE_API_URL = "http://localhost:8000/api/v1/"

const useAuth = () => {

  const register = async (values: RegisterDataInterface) => {

    const url = BASE_API_URL + 'user/register'
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const res = await req.json()

    return {
      message: res.message, status: req.status
    }
  }

  const login = async (values: LoginDataInterface) => {

    const url = BASE_API_URL + 'user/login'
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const res = await req.json()

    return {
      message: res.message, status: req.status
    }

  }

  return {
    register,
    login
  }

}

export default useAuth
