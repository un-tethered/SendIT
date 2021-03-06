
export default (req, res, next) => {
  const { status } = req.body;
  const acceptIf = ['created', 'in-transit', 'cancelled', 'delivered'];
  return !acceptIf.includes(status)
    ? res.status(400).json({ status: 400, error: 'Invalid status, accepted values are \'created\', \'in-transit\', \'cancelled\', or \'delivered\'.' })
    : next();
};
