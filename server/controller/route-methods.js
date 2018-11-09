import data from '../config/config-test';

class routeMethods {
  static createOrder(req, res) {
    if (req.body.pickupLocation && req.body.destination && req.body.description) {
      const order = {
        id: data.length + 1,
        user: 'Omoefe',
        status: 'created',
        pickupLocation: req.body.pickupLocation,
        currentLocation: req.body.pickupLocation,
        destination: req.body.destination,
        description: req.body.description,
      };
      data.push(order);
      return res.status(201).send({
        success: true,
        message: 'Order created successfully.',
        order,
      });
    }

    return res.status(400).send({
      success: false,
      message: 'Please fill all fields.',
    });
  }

  static fetchAll(req, res) {
    if (data[0]) {
      return res.status(200).send({
        success: true,
        message: 'Orders retrieved successfully.',
        orders: data,
      });
    }

    return res.status(200).send({
      success: true,
      message: 'No orders to retrieve.',
    });
  }

  static fetchById(req, res) {
    const id = Number(req.params.parcelId);
    const order = data.filter(parcel => parcel.id === id);
    if (order[0]) {
      return res.status(200).send({
        success: true,
        message: 'Order retrieved successfully.',
        order: order[0],
      });
    }
    return res.status(404).send({
      success: false,
      message: 'Order does not exist.',
    });
  }

  static cancel(req, res) {
    const id = Number(req.params.parcelId);
    let orderFound;

    data.forEach((order) => {
      if (order.id === id) {
        orderFound = order;
      }
    });

    if (!orderFound) {
      return res.status(404).send({
        success: false,
        message: 'Invalid ID.',
      });
    }

    orderFound.status = 'cancelled';

    return res.status(200).send({
      success: true,
      message: `Order ${id} cancelled.`,
    });
  }

  static fetchByUser(req, res) {
    const user = req.params.userId;
    const orders = data.filter(order => order.user === user);
    if (orders[0]) {
      return res.status(200).send({
        success: true,
        message: 'Orders retrieved successfully.',
        orders,
      });
    }

    return res.status(404).send({
      success: false,
      message: 'No orders for this user.',
    });
  }
}

export default routeMethods;
