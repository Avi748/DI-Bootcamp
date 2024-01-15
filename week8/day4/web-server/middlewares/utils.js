/** request => Middleware => response */
const logger = (req, res, next) => {
    console.log('url =>', req.url);
    console.log('params =>' , req.params);
    console.log('methods =>', req.method);
    next()
};

//use url?admin=John to access
const auth = (req, res, next) => {
    const {admin} = req.query;
    if(admin === 'John'){
        next()
    }else{
        res.send("Not authorized")
    }
};

module.exports = {logger, auth}