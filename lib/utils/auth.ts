import { NextRouter } from "next/router"

export const getLocalStorageItem = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
}

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
