import type { NextPage } from 'next'
import { useState } from 'react'

const TestPage: NextPage = () => {

  const [cookies, setCookies] = useState({})
  const [response, setResponse] = useState({})

  const clickHandler = async () => {
    const requestBody = { access_token: 'shjsns' }
    const req = await fetch('/api/cookie/set', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    })

    setCookies({
      status: req.statusText
    })
  }

  const deleteHandler = async () => {
    const req = await fetch('/api/cookie/destroy', {
      method: 'DELETE'
    })
    const res = await req.json()

    setResponse(res.message)
  }

  return (
    <>
      <div>
        <pre>{JSON.stringify(cookies, null, 2)}</pre>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
      <button onClick={clickHandler}>create cookie</button>
      <button onClick={deleteHandler}>delete cookie</button>
    </>
  )
}

export default TestPage
