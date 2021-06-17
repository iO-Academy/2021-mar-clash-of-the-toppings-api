const ResponsesService = require("./../Services/ResponsesService");

const sendInvalidMethodResponse = (req, res) => ResponsesService.invalidMethod();

module.exports.sendInvalidMethodResponse = sendInvalidMethodResponse;
