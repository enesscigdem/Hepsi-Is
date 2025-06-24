import { Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { PrismaClient } from '@prisma/client'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

const prisma = new PrismaClient()

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    })
  ]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3001)
}
bootstrap()
