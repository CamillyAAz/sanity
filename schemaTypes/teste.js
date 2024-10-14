import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Cadastro',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'Sobrenome',
      type: 'string',
    }),
    defineField({
      name: 'Nascimento',
      type: 'datetime',
    }),
    defineField({
      name: 'estudante',
      type: 'boolean',
    }),
  ],
})