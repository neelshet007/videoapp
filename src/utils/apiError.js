class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error =[],
        statck=""

    ){
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.data= null,
        this.success= false,
        this.errors = this.errors
        if (statck) {
            this.statck= statck;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

        
    }
}

export {ApiError}