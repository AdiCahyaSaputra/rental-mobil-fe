import { NextRouter } from 'next/router'

export const setAccessToken = async (token: string, role_id: number, router: NextRouter) => {
  const role = ['customer', 'owner']
  const requestBody = { access_token: token, role: role[role_id - 1] }

  const req = await fetch('/api/cookie/set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  if (req.status !== 200) return console.log(req.statusText)

  return router.push('/beranda/page/1')
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
