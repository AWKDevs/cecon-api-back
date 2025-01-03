import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS:  
  app.enableCors({
    origin: 'http://localhost:3000', 
    // O un array con múltiples orígenes si fuera necesario
    // origin: ['http://localhost:3000', 'http://localhost:8080']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
