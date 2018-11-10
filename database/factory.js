'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Currency', (faker) => {
  return {
    name : faker.paragraph({ sentences: 2 }),
    usd:   faker.paragraph({ sentences: 2 }),
    price: faker.paragraph({ sentences: 2 }),
    image: faker.paragraph({ sentences: 2 }),
    roll: faker.paragraph({ sentences: 2 })
  }
})
