// src/index.ts

// 1
import { createYoga, createSchema } from 'graphql-yoga'

import { schema } from './schema'

import { createServer } from 'http'
import SchemaBuilder from '@pothos/core'
// 2
const yoga = createYoga({ schema })

const port = Number(process.env.API_PORT) || 4000
// 3
const server = createServer(yoga)
// 4
server.listen(4000, () => {
  console.info('Server is running  on ..')
})
