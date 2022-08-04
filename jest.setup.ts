module.exports = async () => {
  process.env.ENV = "test";
  process.env.TZ = "UTC";
  return;
};
