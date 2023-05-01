import { Module } from '@nestjs/common';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorsModule } from './authors/authors.module';
import { MovementsModule } from './movements/movements.module';
import { BalanceModule } from './balance/balance.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthorsModule,
    MovementsModule,
    BalanceModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/finanzas'),
  ],
  /* controllers: [AppController],
  providers: [AppService], */
})
export class AppModule {}
