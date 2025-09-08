import dados from "../models/dados.js";
const { bruxos } = dados;

const getAllBruxos = (req, res) => {
  let resultado = bruxos;

  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};
 
const getById = (req, res) => {
    const id = parseInt(req.params.id)
    const bruxo = bruxos.find(b => b.id === id);

    if (bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Este bruxo não existe"}
        )
    }
}


export { getAllBruxos, getById };
