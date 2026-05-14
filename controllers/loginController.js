const fs = require('fs').promises

const postLogin = async (req, res) => {
  try {
    const { usuario, password } = req.body
    const data = await fs.readFile('./data/usuarios.json', 'utf8')
    const usuarios = JSON.parse(data)
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === usuario && u.password === password
    )
    if (!usuarioEncontrado) {
      return res.status(401).json({ msg: 'Usuario o contraseña incorrectos' })
    }
    return res.status(200).json(usuarioEncontrado)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error en el servidor' })
  }
}

module.exports = { postLogin }