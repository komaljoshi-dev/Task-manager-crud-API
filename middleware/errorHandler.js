const errorHandler = (err, req, res, next) => {
    //statusCode gets the value whatever the error has status if not default is 500 - server error

      if (err.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Invalid task ID'
        });
      }
    
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server error'
      });
    };
    
    export default errorHandler;
    