import { useParams} from "react-router-dom";

const Item = ({products, itemNo, handleValueChange, addItemToSaved}) => 
{
    const {id} = useParams()
    const findProduct=products.find(product => product.id === parseInt(id))
    let {title, price, description, category, image} = findProduct

    return ( 
        <>
            {findProduct ? 
            (
                <>
                    <div className="flex-container mt-5">
                        <div className="flex-item">
                            <img src={image} alt={title} />
                        </div>
                        <div className="flex-item">
                            <h2>{title}</h2>
                            <p className="m-1">{description}</p>
                            <p className="m-1">Price: USD. {price}</p>
                            <p className="m-1">Category: {category}</p>
                            <form >
                                <input type="number" min="1" value={itemNo} className="form-control" onChange={handleValueChange}/>
                                <button type="submit" className="btn btn-success col-12 mt-3">Add to cart</button>
                            </form>
                            <button type="button" onClick={()=>addItemToSaved(id)} className="btn btn-secondary col-5 mt-2 ms-2">Add to saved items</button>
                            <button type="button" className="btn btn-info col-5 mt-2 ms-5">Continue shopping</button>
                        </div>
                    </div>
                </>
            ): (<p>Item not found</p>)}  
        </>
     );
}
 
export default Item;