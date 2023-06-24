export class CustomError extends Error{
    statusCode;
    constructor(message, status){
        super(message);
        this.statusCode = status;
    }
}

