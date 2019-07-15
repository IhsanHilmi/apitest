'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const user = use('App/Models/User')
const stuff = use('App/Models/Stuff')

class DatabaseSeeder {
  async run () {
  const user1 = new user()
  const stuff1 = new stuff()

  user1.username = 'Hilmi'
  user1.email = 'hilmi.kyosou.080202@gmail.com'
  user1.password = 'abcdefg'
  await user1.save()

  stuff1.name = 'Bangku'
  stuff1.description = 'Bangkunya Hilmi'
  stuff1.id_belonging = user1.id

  await stuff1.save()
  }
}

module.exports = DatabaseSeeder
