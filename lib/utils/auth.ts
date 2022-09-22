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

  return router.push('/')
}

export const destroyAccessToken = async (router: NextRouter) => {
  const req = await fetch('/api/cookie/destroy', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  if (req.status !== 200) return console.log(req.statusText)

  return router.push('/login')
}
