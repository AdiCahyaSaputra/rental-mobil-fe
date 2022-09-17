const token = localStorage.getItem('token')

export const getData = async (url: string, method: string) => {
  const req = await fetch(process.env.BASE_API_URL + url, {
    method, headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })

  const res = await req.json()

  return {
    data: res,
    message: "Berhasil"
  }
}

