import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Write your code here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "This is a test endpoint" })
    }
  }
)

handler.use(
  cors({
    credentials: true
  })
)