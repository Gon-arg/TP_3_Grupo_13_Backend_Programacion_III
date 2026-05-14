const fs = require('fs').promises
const path = require('path')

const getEquipo = async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../data/equipo.json'), 'utf8')
    const equipo = JSON.parse(data)
    return res.status(200).json(equipo)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'No se pudo obtener el equipo' })
  }
}

module.exports = { getEquipo }