const successHandler = (res) => {
  if (Array.isArray(res)) {
    return {
      status: 200,
      message: "ok",
      total: res.length,
      data: res,
    };
  } else {
    return {
      status: 200,
      message: "ok",
      data: res,
    };
  }
};

const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") err.status = 400;
  return res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || "Something went wrong.",
    },
  });
};

module.exports = {
  successHandler,
  errorHandler,
};
