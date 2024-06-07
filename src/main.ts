import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Es para que el controller use el pipe(Validaciones) de cada controllar si es que existe
  app.useGlobalPipes(new ValidationPipe({
    //Con whitelist limpia valores que no estan especificados en el dto
    whitelist:true
  }));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //Ejemplo de cors
  app.enableCors({
    // origin:"http://localhost:3000" //Con esto solo permite que localhost entre
  });

  await app.listen(3000);
}
bootstrap();
