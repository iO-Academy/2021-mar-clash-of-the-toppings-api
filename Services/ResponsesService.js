const unsuccessful = () => {
  return {
    data: [],
    msg: "There has been an error",
    statuscode: 404,
    success: false,
  };
};
const successful = () => {
  return {
    data: [],
    msg: "Success",
    statuscode: 200,
    success: true,
  };
};
module.exports.unsuccessful = unsuccessful;
module.exports.successful = successful;
