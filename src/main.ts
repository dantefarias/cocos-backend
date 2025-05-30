import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Cocos Challenge Backend')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  if (document.components?.schemas) {
    document.components.schemas['i'] = {
      type: 'string',
      format: 'decimal',
      example: '9.99',
    };
  }
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
