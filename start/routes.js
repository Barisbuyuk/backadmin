'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/currency/:page/:rows/:order?/:direction?', 'CurrencyController.index')
Route.post('/currency/bulkDelete', 'CurrencyController.bulkDelete')
Route.delete('/currency/:id', 'CurrencyController.delete')
Route.post('/currency', 'CurrencyController.store')
Route.put('/currency', 'CurrencyController.update')
Route.post('/currency/truncate', 'CurrencyController.truncate')