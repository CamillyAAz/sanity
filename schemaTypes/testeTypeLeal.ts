import {defineField, defineType} from 'sanity'

export const gabrielLeal = defineType({
  name: 'event',
  title: 'Cadastro',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'lastname',
        type: 'string',
    }),
    defineField({
        name: 'age',
        type: 'number',
    }),
    defineField({
        name: 'state',
        type: 'string',
        options: {
          list: [
            'Acre',
            'Alagoas',
            'Amapá',
            'Amazonas',
            'Bahia',
            'Ceará',
            'Distrito Federal',
            'Espírito Santo',
            'Goiás',
            'Maranhão',
            'Mato Grosso',
            'Mato Grosso do Sul',
            'Minas Gerais',
            'Pará',
            'Paraíba',
            'Paraná',
            'Pernambuco',
            'Piauí',
            'Rio de Janeiro',
            'Rio Grande do Norte',
            'Rio Grande do Sul',
            'Rondônia',
            'Roraima',
            'Santa Catarina',
            'São Paulo',
            'Sergipe',
            'Tocantins'
          ]
        }
    }),
  ],
})