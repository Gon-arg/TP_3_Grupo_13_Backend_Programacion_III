const fs = require('fs').promises
const path = require('path')

const getPerfil = async (req, res) => {

    try {
        const data = await fs.readFile(path.join(__dirname, '../data/usuarios.json'), 'utf8')
        const usuarios = JSON.parse(data)
        const { id } = req.params
        const usuario = usuarios.find((u) => u.id === parseInt(id))
        if (!usuario) {
            return res.status(404).json({ msg: `No existe el usuario con id ${id}` })
        }
        return res.status(200).json(usuario)
    } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `No se pudo obtener el perfil con id ${id}` })
    }
}

module.exports = { getPerfil }