import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './user.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
    //Aplicando el middleware para todas las rutas users
    // consumer.apply(LoggerMiddleware).forRoutes("users");

    //Aplicando el middelware para ciertas rutas
    // consumer
    // .apply(LoggerMiddleware)
    // .forRoutes(
    //   {path:"users",method:RequestMethod.GET},
    //   {path:"users",method:RequestMethod.POST}
    // )
    // .apply(AuthMiddleware)
    // .forRoutes("users")
  }
}
