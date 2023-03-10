import {FastifyInstance} from 'fastify'
import { prisma } from "./lib/prisma"
import {z} from 'zod'
export async function appRoutes(app: FastifyInstance){

app.post('/habits', async (request) => {

    const createHabiteBody = z.object({
        tittle: z.string(),
        weekDays:z.array(
            z.number().min(0).max(6))
    })
    const{tittle, weekDays} = createHabiteBody.parse(request.body)
    
})

}