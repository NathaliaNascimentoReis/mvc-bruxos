import dados from "../models/dados.js";
const { animais } = dados;

const getAllAnimais = (req, res) => {
  let resultado = animais;

  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

const getById = (req, res) => {
    const id = parseInt(req.params.id)
    const animal = animais.find(b => b.id === id);

    if (animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({
            mensagem: "Este animal não existe"}
        )
    }
}

export { getAllAnimais, getById };
