const Fabricante = require('../models/Fabricante');
const Carro = require('../models/Carro');

module.exports = {
  async index(req, res) {
    const { fab_id } = req.params;
    
    try {
      const fabricante = await Fabricante.findByPk(fab_id, {
        include: { association: 'carros' }
      });
      return res.json(fabricante.carros);

    } catch (err) {
      return res.status(500).json({err})
    }
    
  },

  async store(req, res) {
    const { fab_id } = req.params;
    const car = req.body;
    car.fab_id = fab_id
   
    const fabricante = await Fabricante.findByPk(fab_id);
    if (!fabricante) {
      return res.status(400).json({ error: 'Fabricante not found' });
    }
    try {
      const carro = await Carro.create(car);
      return res.json({fabricante, carro});
      //return res.json(carro);

    } catch (err) {
      return res.status(500).json({err})
    }
  }
};