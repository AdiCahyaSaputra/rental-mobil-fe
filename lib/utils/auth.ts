import { NextRouter } from "next/router"

export const setAccessToken = async (token: string, router: NextRouter) => {
  const requestBody = { access_token: token }

  const req = await fetch('/api/cookie/set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  if (req.status !== 200) return console.log(req.statusText)

  return router.push('/beranda')
}

export const destroyAccessToken = async (router?: NextRouter | null) => {
  const req = await fetch('/api/cookie/destroy', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  if (req.status !== 200) return console.log(req.statusText)
  if (router) return router.push('/login')
}

export const validateAccessToken = async (token: string) => {
  const req = await fetch('http://localhost:8000/api/v1/user/validate', {
    method: 'GET',
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

export const middlewarePartDua = async (token: string | undefined) => {
  if (token) {

    const validate = await validateAccessToken(token)

    if (validate.status === 401) {

      destroyAccessToken(null)
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }

    }

  }
}
