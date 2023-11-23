const Cart = ({cart}) => 
{
  const cartMap=cart.map(cartItem =>
    {
      let {image, title, quantity, unitPrice, totalPrice} = cartItem

      return(
        <tr>
          <td>
            <img src={image} alt={title} />
          </td>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>{unitPrice}</td>
            <td>{totalPrice}</td>
        </tr>
      )
    })

  return (  
    <>
      <h1>Cart Page</h1>
      <table>
        <tr>
          <th>Image</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit price</th>
          <th>Total price</th>
        </tr>
        {cartMap}
      </table>
    </>
  );
}
 
export default Cart;