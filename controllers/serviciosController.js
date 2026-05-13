const fs = require('fs').promises

const getServicios = async (req, res) => {
  try {
    const data = await fs.readFile('./data/servicios.json', 'utf8')
    const servicios = JSON.parse(data)
    return res.status(200).json(servicios)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'No se pudieron obtener los servicios' })
  }
}

const getServicioById = async (req, res) => {
  try {
    const data = await fs.readFile('./data/servicios.json', 'utf8')
    const servicios = JSON.parse(data)
    const { id } = req.params
    const servicio = servicios.find((s) => s.id === parseInt(id))
    if (!servicio) {
      return res.status(404).json({ msg: `No existe el servicio con id ${id}` })
    }
    return res.status(200).json(servicio)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `No se pudo obtener el servicio con id ${id}` })
  }
}

module.exports = { getServicios, getServicioById }