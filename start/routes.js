'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('new', 'UserController.store')
  Route.put('edit/:id', 'UserController.update')
  Route.delete('delete/:id', 'UserController.delete')
  Route.post('list','UserController.index')
  Route.post(':id','UserController.show')
  
  Route.group(() => {
    Route.get('new', 'StuffController.store')
    Route.post('list','StuffController.index')
    Route.post(':sid','StuffController.show')
  }).prefix(':id/stuff/')

}).prefix('user/')


Route.group(() => {
  Route.put('edit/:sid', 'StuffController.update')
  Route.delete('delete/:sid', 'StuffController.delete')
  Route.post('list','StuffController.index')
  Route.post(':sid','StuffController.show')
}).prefix('stuff/')