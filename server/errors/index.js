export const handler = (err, req, res, next) => {
    res.status(err.statusCode).send(err.message);
}