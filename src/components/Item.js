const Item = ({products}) => 
{
    return ( 
        <h1>Items Page</h1>

        /*
        This component receives the products array as props. Your goal is to display only the item which has been clicked. Refer to the code below to help you complete the task.
        */

        /* 
        
        import { useParams } from "react-router-dom";
        
        const Country = ({countries}) => 
        {
            const {id} = useParams() //Returns all the parameters that have been bassed to the URL

            const country=countries.find(country=> country.id === parseInt(id))
            let {name, capital} = country

            return ( 
                <>
                    <h1>Country Page</h1>
                    <p>Country name: {country ? name : null}</p>
                    <p>Captial city: {country ? capital : null}</p>
                </>
            );
        }
        `
        export default Country;
        
        */
     );
}
 
export default Item;