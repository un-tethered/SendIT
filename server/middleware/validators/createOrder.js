import { errorSelector, isValid, isAddress } from '../../helpers/validator';

/** class representing checks for input sent while creating order */
class check {
  /**
   * Check if all fields are filled.
   * @param {Object} req the request object.
   * @param {Object} res the response object.
   * @param {Function} next calls the next middleware
   * @return {Object} the error object if tests fail
   * @return {Function} calls the next middleware if test passes
   */
  static isComplete(req, res, next) {
    const { location, destination, weight } = req.body;
    const requiredFields = [location, destination, weight];
    if (requiredFields.includes(undefined)) {
      const required = [
        'location where the parcel will be picked up from',
        'destination where the parcel will be delivered to',
        'parcel weight',
      ];
      const i = requiredFields.indexOf(undefined);
      return res.status(400).json({
        status: 400,
        error: `Please enter the ${required[i]}.`
      });
    }
    next();
  }

  /**
   * Run preliminary checks for valid input.
   * @param {Object} req the request object.
   * @param {Object} res the response object.
   * @param {Function} next calls the next middleware
   * @return {Function} Sends the adequate error message
   */
  static general(req, res, next) {
    const { location, destination } = req.body;
    if (!isValid(location).valid) {
      return res.status(400).json({
        status: 400,
        message: errorSelector(isValid(destination).reason, 'location'),
      });
    }
    if (!isValid(destination).valid) {
      return res.status(400).json({
        status: 400,
        message: errorSelector(isValid(destination).reason, 'destination'),
      });
    }
    if (Number.isNaN(Number(req.body.weight))) {
      return res.status(400).json({
        status: 400,
        message: 'Use numbers for weight',
      });
    }
    next();
  }

  /**
   * Check if location exists on google api.
   * @param {Object} req the request object.
   * @param {Object} res the response object.
   * @param {Function} next calls the next middleware
   */
  static location(req, res, next) {
    const { location } = req.body;
    isAddress(location, (address, error, coords) => {
      if (address) {
        req.body.location = address;
        req.body.locationCoords = { lat: coords.lat, lng: coords.lng };
        next();
      } else {
        return res.status(400).json({
          status: 400,
          message: error,
        });
      }
    });
  }

  /**
   * Check if destination exists on google api.
   * @param {Object} req the request object.
   * @param {Object} res the response object.
   * @param {Function} next calls the next middleware
   */
  static destination(req, res, next) {
    const { destination } = req.body;
    isAddress(destination, (address, error, coords) => {
      if (address) {
        req.body.destination = address;
        req.body.destinationCoords = { lat: coords.lat, lng: coords.lng };
        next();
      } else {
        return res.status(400).json({
          status: 400,
          message: error,
        });
      }
    });
  }
}


export default [check.isComplete, check.general, check.location, check.destination];