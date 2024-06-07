import { ArgumentMetadata, HttpException, HttpStatus, HttpVersionNotSupportedException, Injectable, PipeTransform } from '@nestjs/common';

//Pipe personalizado es para validar que corresponda el tipo de valor en los querys o params
//Esto debido a que querys o params solo recibe datos strings
//Para validar el body se utiliza el otro pipe

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log("value",value);

    const ageNumber = parseInt(value.age.toString(), 10);

    if(isNaN(ageNumber))
      throw new HttpException("Age must be a number", HttpStatus.BAD_REQUEST);
    
    return {...value,age:ageNumber};
  }
}
