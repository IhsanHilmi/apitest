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
  const user2 = new user()
  const stuff1 = new stuff()
  const stuff2 = new stuff()
  const stuff3 = new stuff()

  user1.username = 'Hilmi'
  user1.email = 'hilmi.kyosou.080202@gmail.com'
  user1.password = 'abcdefg'
  await user1.save()

  user2.username = 'Ihsan'
  user2.email = 'ihsanhilmi7G@gmail.com'
  user2.password = '1234567'
  await user2.save()
  

  stuff1.name = 'Bangku'
  stuff1.description = 'Bangkunya Hilmi'
  stuff1.id_belonging = user1.id
  await stuff1.save()

  stuff2.name = 'Kursi'
  stuff2.description = 'Kursi Hilmi'
  stuff2.id_belonging = user1.id
  await stuff2.save()

  stuff3.name = 'Kamus'
  stuff3.description = 'Kamus B. Jepang Ihsan'
  stuff3.id_belonging = user2.id
  await stuff3.save()
  
  }
}

module.exports = DatabaseSeeder
