'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StuffSchema extends Schema {
  up () {
    this.create('stuffs', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.text('description')
      table.integer('id_belonging').references('id').inTable('users').notNullable()
      
    })
  }

  down () {
    this.drop('stuffs')
  }
}

module.exports = StuffSchema
