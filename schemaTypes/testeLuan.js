import {defineField, defineType} from 'sanity'

export const testeLuan = defineType({
  name: 'event',
  title: 'Luan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'datadenascimento',
        type: 'date',
    }),
    defineField({
        name: 'seila',
        type: 'url',
    }),
    defineField({
        name: 'description',
        type: 'text',
    }),
    defineField({
        name: 'image',
        type: 'image',
    }),
    defineField({
        name: 'location',
        type: 'geopoint',
    }),
  ],
})