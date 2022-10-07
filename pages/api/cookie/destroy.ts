import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { deleteCookie } from 'cookies-next'

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'DELETE') return res.status(401).end()

  deleteCookie('token', { req, res })
  deleteCookie('role', { req, res })

  res.status(200).json({
    message: 'berhasil hapus cookie'
  })

}

export default handler
