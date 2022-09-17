// Interface
import UserData from "lib/interface/UserData"

type AuthProps = {
  middleware: string,
  redirectIfAuthenticated: string
}

const useAuth = ({ middleware, redirectIfAuthenticated }: AuthProps) => {
  const register = async (data: UserData) => {
    const url = 'http://localhost:8000/api/v1/user/register/'
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data)
    })

    const res = await req.json()

    return res
  }

  return {
    register
  }

}

export default useAuth
