'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CurrenciesSchema extends Schema {
  up () {
    this.create('currencies', (table) => {
      table.increments()
      table.string('name', 255);
      table.string('usd', 255);
      table.string('price', 255);
      table.string('image', 255);
      table.string('roll', 255);
      table.timestamps()
    })
  }

  down () {
    this.drop('currencies')
  }
}

module.exports = CurrenciesSchema
