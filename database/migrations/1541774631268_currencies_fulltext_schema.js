'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CurrenciesFulltextSchema extends Schema {
  up () {
    this.raw('ALTER TABLE currencies ADD FULLTEXT (`name`, `usd`, `price`)')
  }
}

module.exports = CurrenciesFulltextSchema
