import dados from "../models/dados.js";
const { pocoes } = dados;

const getAllPocoes = (req, res) => {
  let resultado = pocoes;

  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

const getById = (req, res) => {
  const id = parseInt(req.params.id)
  const pocao = pocoes.find(b => b.id === id);

  if (pocao) {
      res.status(200).json(pocao);
  } else {
      res.status(404).json({
          mensagem: "Este animal não existe"}
      )
  }
}

export { getAllPocoes, getById };
