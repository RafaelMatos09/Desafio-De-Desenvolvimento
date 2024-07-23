create table usuarios (
    id serial primary key,
    nome text not null,
    sobre_nome text not null,
    email text unique not null,
    telefone text not null,
    data_nascimento date not null
);