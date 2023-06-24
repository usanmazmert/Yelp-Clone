export class NotFoundError extends Error{
    statusCode;
    constructor(message){
        super(message);
        this.statusCode = 404;
    }
}
