import { Response, Request } from "express";

const customError = (err: any, req: Request, res: Response) => {
  const status = err.status ? err.status : 500;

  res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default customError;
