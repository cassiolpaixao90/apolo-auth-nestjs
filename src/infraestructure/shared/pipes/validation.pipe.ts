import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
	async transform(value: any, {  metatype }: ArgumentMetadata) {

		if (!metatype || !this.toValidate(metatype))
			return value;

        const object = plainToClass(metatype, value);
		const errors = await validate(object);
		if (errors.length > 0) {
			throw new HttpException(this.formatErrors(errors), HttpStatus.BAD_REQUEST);
        }

		return value;
	}

	private toValidate(metatype): boolean {
		const types: any[] = [String, Boolean, Number, Array, Object];
		return !types.find(type => metatype === type);
	}

	private formatErrors(errors: any[]) {
		return errors.map(v => ({
			property: v.property,
			message: Object.values(v.constraints).join()
		}));
	}
}
