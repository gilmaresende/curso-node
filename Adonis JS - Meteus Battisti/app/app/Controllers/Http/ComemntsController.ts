import Moment from '../../Models/Moment';

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coment from 'App/Models/Coment';

export default class ComemntsController {

  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body();
    const momentId = params.momentId;

    await Moment.findOrFail(momentId);

    body.momentId = momentId

    const commnet = await Coment.create(body)

    response.status(201)

    return {
      message: 'Comentario Adiocionado',
      data: commnet
    }
  }
}
