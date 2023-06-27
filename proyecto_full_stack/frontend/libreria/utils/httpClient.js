const API = "http://team5.com.ar/api/v1"

export const get = async (url) => {
  const response = await fetch(`${API}${url}`,{
  })
  const data = await response.json()
  return data
}

// TODO: Hacer un buen sistema de logueo
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API}/users/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Connection': 'keep-alive'
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};
