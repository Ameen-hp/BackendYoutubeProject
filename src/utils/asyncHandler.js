let asyncHandler = (fn) => {
    return async (req,res,next) => {
        try {
            await fn(req,res,next);
        }
        catch(err) {
            next(err); // send error to Express error middleware
        }
    }
}

export default asyncHandler;
