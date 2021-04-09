import { NestFactory } from '@nestjs/core';
import { CodeModule } from './code/code.module';

async function bootstrap() {
  const app = await NestFactory.create(CodeModule);
  await app.listen(3000);
}
bootstrap();
