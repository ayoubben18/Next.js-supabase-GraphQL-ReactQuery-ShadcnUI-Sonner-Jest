import { CustomErrorEnums } from "@/enums/errors.enum";

export class CustomError extends Error {
  status: number;
  constructor(message: string, name: CustomErrorEnums, status: number) {
    super(message);
    this.name = name;
    this.status = status;

    // TODO : details and status code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}
