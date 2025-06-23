import { NestFactory } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { Module, Controller, Get, Param, Query } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { HttpModule, HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'

@Controller()
class AppController {
  constructor(private http: HttpService) {}

  @Get('jobs')
  async getJobs(@Query('keyword') keyword = '') {
    const { data } = await firstValueFrom(
      this.http.get(`http://localhost:3002/jobs`, { params: { keyword } })
    )
    return data
  }

  @Get('jobs/:id')
  async getJob(@Param('id') id: string) {
    const { data } = await firstValueFrom(
      this.http.get(`http://localhost:3002/jobs/${id}`)
    )
    return data
  }
}

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    })
  ],
  controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
