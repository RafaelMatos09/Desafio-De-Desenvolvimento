const joi = require("joi");

const schemaUsuario = joi.object({
  nome: joi.string().trim().min(1).required().messages({
    "string.base": "O campo nome deve ser um texto",
    "string.empty": "O campo nome não pode estar vazio",
    "string.min": "O campo nome não pode estar vazio",
    "any.required": "O campo nome é obrigatório",
  }),
  sobre_nome: joi.string().trim().min(1).required().messages({
    "string.base": "O campo sobrenome deve ser um texto",
    "string.empty": "O campo sobrenome não pode estar vazio",
    "string.min": "O campo sobrenome não pode estar vazio",
    "any.required": "O campo sobrenome é obrigatório",
  }),
  email: joi.string().email().required().messages({
    "string.email": "O campo email precisa ter um formato válido",
    "any.required": "O campo email é obrigatório",
    "string.empty": "O campo email não pode estar vazio",
  }),
  telefone: joi.string().pattern(/^\d+$/).min(10).max(15).required().messages({
    "string.pattern.base": "O campo telefone deve conter apenas números",
    "string.min": "O campo telefone deve ter pelo menos 10 dígitos",
    "string.max": "O campo telefone deve ter no máximo 15 dígitos",
    "any.required": "O campo telefone é obrigatório",
    "string.empty": "O campo telefone não pode estar vazio",
  }),
  data_nascimento: joi.date().iso().required().messages({
    "date.base": "O campo data de nascimento deve ser uma data válida",
    "date.iso": "O campo data de nascimento precisa estar no formato YYYY-MM-DD",
    "any.required": "O campo data de nascimento é obrigatório",
    "string.empty": "O campo data de nascimento não pode estar vazio",
  })  
});

module.exports = schemaUsuario;
