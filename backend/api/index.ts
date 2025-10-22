import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import express from 'express';
import { INestApplication } from '@nestjs/common';

const server = express();
let app: INestApplication;

async function bootstrap(): Promise<express.Application> {
  if (!app) {
    app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
      { cors: true }
    );
    
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    
    await app.init();
  }
  return server;
}

// Export for Vercel serverless
export default async (req: any, res: any) => {
  const app = await bootstrap();
  return app(req, res);
};

