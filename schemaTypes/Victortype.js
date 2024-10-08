import {defineField, defineType} from 'sanity'

export const VictorType = defineType({
  name: 'event',
  title: 'Cadastro',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'sobrenome',
        type: 'string',
    }),
    defineField({
        name: 'Idade',
        type: 'number', 
    }),
    defineField({
        name: 'imagem',
        type: 'image',
    }),
    defineField({
        name: 'Viado',
        type: 'boolean',
    }),
  ],
})