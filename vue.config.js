const fs = require("fs");
module.exports = {
    devServer: {
        disableHostCheck : true,
        https: {
            key: fs.readFileSync('/home/dev_koo/code/privkey.pem'),
            cert: fs.readFileSync('/home/dev_koo/code/cert.pem'),
            ca: fs.readFileSync('/home/dev_koo/code/chain.pem'),
        }
    }
}
