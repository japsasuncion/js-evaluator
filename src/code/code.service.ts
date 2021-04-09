import { Injectable } from '@nestjs/common';
const vm = require('vm');

@Injectable()
export class CodeService {
  evaluate(script: string): string {
    let output;
    try {
      const result = this.runScript(script);
      output = this.parse(result);
    } catch (err) {
      if (err.message) {
        output = err.message;
      } else {
        output = err;
      }
    }
    return output;
  }

  private parse(value: any): string {
    let output;
    switch (typeof value) {
      case 'object': {
        output = this.parseObject(value);
        break;
      }
      default: {
        output = String(value);
      }
    }
    return output;
  }

  private parseObject(value: Object): string {
    return JSON.stringify(value);
  }

  private runScript(script: string): any {
    const context = {};
    vm.createContext(context);
    vm.runInContext(script, context);
    return context;
  }
}
