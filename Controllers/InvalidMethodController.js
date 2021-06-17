const ResponsesService = require("./../Services/ResponsesService");

const sendInvalidMethodResponse = (req, res) => res.json(ResponsesService.invalidMethod());

module.exports.sendInvalidMethodResponse = sendInvalidMethodResponse;
