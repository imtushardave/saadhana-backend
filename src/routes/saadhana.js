const Saadhana = require('../controllers/saadhana');
const { tryCatch } = require('../utils/tryCatch');

module.exports = function(app) {

    app.route('/saadhana').get(tryCatch(async (req, res) => {

        let params = req.query;
        let result = await Saadhana.getAllSaadhana(params);
        return res.json(result);

    }));
}