const EmtyInput = () => {
  return res.status(200).json({
    status: "error",
    message: "The input is required",
  });
};
module.exports = {
  EmtyInput,
};
