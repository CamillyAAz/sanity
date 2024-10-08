import { defineField, defineType } from 'sanity'

export const eventoVitor = defineType({
    name: 'Cadastro',
    title: 'Pessoa',
    type: 'document',
    fields: [
        defineField({
            name: 'Nome',
            type: 'string',
        }),
        defineField({
            name: 'Sobrenome',
            type: 'string'
        }),
        defineField({
            name: 'Idade',
            type: 'number'
        }),
        defineField({
            name: 'Estado',
            type: 'string',
            options: {
                list: ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará',
                    'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
                    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará',
                    'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
                    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima',
                    'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
            }
        }),
    ],
})