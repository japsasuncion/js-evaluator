import { Controller, Post, Body } from '@nestjs/common';
import { CodeService } from './code.service';
import { SubmitCodeDto } from './submit-code.dto';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post()
  create(@Body() submitCodeDto: SubmitCodeDto): string {
    return this.codeService.evaluate(submitCodeDto.script);
  }
}
