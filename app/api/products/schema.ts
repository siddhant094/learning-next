import {number, z} from 'zod'

const schema = z.object({
  name: z.string().min(1),
  price: number().min(1)
})

export default schema