'use strict'

const Currency = use('App/Models/Currency')

class CurrencyController {
  async index({ request, params }){
    var columns = ['id', 'name', 'usd', 'price']
    var currencies = Currency.query().select(columns)
    if(params.order)
      currencies = currencies.orderBy(params.order, params.direction)
    else
      currencies = currencies.orderBy('id', 'desc')
    if(request.input('search')){
      for(var index in columns){
        currencies = currencies.orWhere(columns[index], 'like', '%'+request.input('search')+'%')
      }
    }
    currencies = await currencies.paginate(params.page, params.rows)    //paginate(page, rowsPerPage)
      
    return currencies
  }

  async bulkDelete({ request }){
    var currencies = await Currency.query().where('id', 'in', request.input('ids')).delete()
    return currencies
  }

  async delete({ params }){
    var currency = await Currency.query().where('id', params.id).delete()
    return currency
  }

  async store({ request }){
    var currency = await Currency.create({
      name: request.input('name'),
      usd: request.input('usd'),
      price: request.input('price'),
      image: 'image'
    })
    return currency
  }

  async update({ request }){
    var currency = await Currency.find(request.input('id'))
    currency.merge({
      name: request.input('name'),
      usd: request.input('usd'),
      price: request.input('price'),
      image: 'non'
    })
    await currency.save()
    return currency
  }

  async truncate(){
    return await Currency.truncate()
  }
}

module.exports = CurrencyController
