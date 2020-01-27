import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneCode'
})

export class PhoneCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var strvalue = String(value);
    if(strvalue[0] == '0') {
      return String(args) + strvalue.substring(1);
    }
    return value;
  }
}