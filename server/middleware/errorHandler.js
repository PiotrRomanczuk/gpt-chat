const errorHandler = async (err, req, res, next) => { 
    console.log(err);    
    return res.status(500).json({ error: err.message });
}

module.exports = errorHandler;