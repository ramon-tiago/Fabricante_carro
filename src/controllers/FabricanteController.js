const Fabricante = require('../models/Fabricante');

module.exports = {
  async index(req, res) {
    const fabricantes = await Fabricante.findAll();

    return res.json(fabricantes);
  },

  async store(req, res) {
    const fabri = req.body;
    const fabricante = await Fabricante.create(fabri);
    return res.json(fabricante);
  }
};

