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
  Route.post('new', 'UserController.store')
  Route.put(':id/edit', 'UserController.update')
  Route.delete(':id/delete', 'UserController.delete')
  Route.get('list','UserController.index')
  Route.get(':id','UserController.show')

}).prefix('user/')

Route.group(() => {
  Route.post('new', 'StuffController.store')
  Route.get('list','StuffController.index')
  Route.get(':sid','StuffController.show')
  Route.put(':sid/edit', 'StuffController.update')
  Route.delete(':sid/delete', 'StuffController.delete')
}).prefix('user/:id/stuff/')

Route.group(() => {
  Route.get('list','StuffController.index')
  Route.get(':sid','StuffController.show')
}).prefix('stuff/')