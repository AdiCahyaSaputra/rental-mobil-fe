import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { setCookie } from "cookies-next"

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(401).end()
  setCookie('token', req.body.access_token, { req, res })
  setCookie('role', req.body.role, { req, res })

  return res.status(200).end()

}

export default handler
