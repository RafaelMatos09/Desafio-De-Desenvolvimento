const verificaParametroId = async (req, res, next) => {
    const { id } = req.params;
  
    if (isNaN(id)) {
      return res.status(400).json({ mensagem: "Id informado inválido" });
    }
    next();
  };
   
  module.exports = verificaParametroId;