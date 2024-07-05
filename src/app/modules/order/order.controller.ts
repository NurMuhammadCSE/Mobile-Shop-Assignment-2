
const createOrder = async (req: Request, res: Response) => {
    try {
      const orderData = req.body;
  
      const parsedOrderData = OrderValidation.orderSchema.parse(orderData);
      const product = await ProductModel.findById(parsedOrderData.productId);
  
      // console.log(product);
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }
  
      if (product.inventory.quantity < orderData.quantity) {
        return res.status(400).json({
          success: false,
          message: 'Insufficient quantity available in inventory',
        });
      }
  
      product.inventory.quantity -= orderData.quantity;
      product.inventory.inStock = product.inventory.quantity > 0;
  
      await product.save();
  
      const result = await OrderModel.create(orderData);
  
      res.status(201).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Could not create order',
        error: error,
      });
    }
  };