const { format } = require("date-fns");
const knex = require("../conexao");

const listar = async (req, res) => {
    
    try {
        const usuarios = await knex("usuarios").returning("*");

        const usuariosFormatados = usuarios.map(usuario => {
            return {
                ...usuario,
                data_nascimento: format(new Date(usuario.data_nascimento), 'yyyy-MM-dd')
            };
        });

        return res.status(200).json(usuariosFormatados);        
    } catch (error) {        
        return res.status(500).json({ mensagem: "Erro interno do Servidor!"});
    }
}


const detalhar = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await knex("usuarios").where({ id: id }).returning("*");

        if (!usuario[0]) {
            return res.status(404).json({ mensagem: `O id inserido ${id} não foi encontrado!`});
        }
        return res.status(200).json(usuario[0]);
        
    } catch (error) {        
        return res.status(500).json({ mensagem: "Erro interno do Servidor!"});
    }

}

const cadastrar = async (req, res) => {
    const {nome, sobre_nome, email, telefone, data_nascimento} = req.body;

    try {
        const emailExiste = await knex("usuarios").where({email: email}).returning("*");    
        
        if(emailExiste[0]) {
            return res.status(404).json({ mensagem: `Email -> ${email} já existe no cadastro!`});
        }
        const usuario = await knex("usuarios").insert({
            nome,
            sobre_nome,
            email,
            telefone,
            data_nascimento
        })
        .returning("*");

        return res.status(201).json(usuario[0]);
                
    } catch (error) {        
        return res.status(500).json({ mensagem: "Erro interno do Servidor!"});
    }
}

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, sobre_nome, email, telefone, data_nascimento} = req.body;

    try {
        const usuario = await knex("usuarios").where({ id: id }).returning("*");

        if (!usuario[0]) {
            return res.status(404).json({ mensagem: `O id inserido ${id} não foi encontrado!`});
        }
        const emailExiste = await knex("usuarios").where({email: email}).returning("*");       
        
        if(emailExiste[0]) {
            return res.status(404).json({ mensagem: `Email -> ${email} já existe no cadastro!`});
        }
        const atualizarUsuario = await knex("usuarios")
        .where({id})
        .update({
            nome,
            sobre_nome,
            email,
            telefone,
            data_nascimento
        })
        .returning("*");
        
        return res.status(201).json(atualizarUsuario[0]);
        
    } catch (error) {        
        return res.status(500).json({ mensagem: "Erro interno do Servidor!"});
    }
}

const deletar = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await knex("usuarios").where({ id: id }).returning("*");

        if (!usuario[0]) {
            return res.status(404).json({ mensagem: `O id inserido ${id} não foi encontrado!`});
        }
        const deletarUsuario = await knex("usuarios")
        .where({ id: id })
        .del();        

        return res.status(201).json(usuario[0]);
        
    } catch (error) {        
        return res.status(500).json({ mensagem: "Erro interno do Servidor!"});
    }
}

module.exports = {
    listar,
    detalhar,
    cadastrar,
    atualizar,
    deletar
}

