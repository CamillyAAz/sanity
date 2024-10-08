import {defineField, defineType} from 'sanity'

export const testeType = defineType({
  name: 'event',
  title: 'Cadastro Alunos',
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
        name: 'idade',
        type: 'number',
      }),
      defineField({
        name: 'cidade',
        type: 'string',
      }),
  ],
})