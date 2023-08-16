const { validateField } = require('../utils/validations');
const Saadhana = require('../models/saadhana');

const getAllSaadhana = async params => {
    const { name } = params;
    validateField(name, 'Missing parameter: name');

    return await Saadhana.getAllTours();
}

module.exports = {
    getAllSaadhana: getAllSaadhana,
}