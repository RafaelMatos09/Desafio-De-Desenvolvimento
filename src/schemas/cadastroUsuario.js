const joi = require("joi");

const schemaUsuario = joi.object({
  nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome não pode estar vazio",
  }),
  sobre_nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome não pode estar vazio",
  }),
  email: joi.string().email().required().messages({
    "string.email": "O campo email precisa ter um formato válido",
    "any.required": "O campo email é obrigatorio",
    "string.empty": "O campo nome não pode estar vazio",
  }),
  telefone: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome não pode estar vazio",
  }),
  data_nascimento: joi.string().isoDate().required().messages({
    "string.isoDate": "O campo data de nascimento precisa estar no formato YYYY-MM-DD",
    "any.required": "O campo data de nascimento é obrigatório",
    "string.empty": "O campo data de nascimento não pode estar vazio",
  })  
});

module.exports = schemaUsuario;