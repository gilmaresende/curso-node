import { DateTime } from 'luxon'
import Coment from './Coment';
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Moment extends BaseModel {

  @hasMany(() => Coment)
  public comment: HasMany<typeof Coment>

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public image: string
}
