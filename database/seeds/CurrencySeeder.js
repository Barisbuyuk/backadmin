'use strict'

/*
|--------------------------------------------------------------------------
| CurrencySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CurrencySeeder {
  async run () {
    await Factory.model('App/Models/Currency').createMany(1000)
  }
}

module.exports = CurrencySeeder
