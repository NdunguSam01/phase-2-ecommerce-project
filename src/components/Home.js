const Home = ({products}) => {
    return ( 
        <h1>Home Page</h1>
        /*
        This page receives a prop of products and displays the products as clickable items.
        Clicking on them should redirect a user to the Items page. 
        
        Refer to the code below in order to complete this

        NB: 
            1. Only the product image and name should be displayed in this page
            2. Make sure you destructure the received props
         */

        /*Code reference

        import { NavLink } from "react-router-dom"

        const Countries = ({countries}) => 
        {
            const country=countries.map(country =>
                {
                    let {id, name}= country
                    return(
                        <li key={id}>
                            <NavLink to={`/countries/${id}`}>{name}</NavLink>
                        </li>
                    )
                    
                })
            return ( 
                <>
                    <h1>Countries Page</h1>
                    <ul>
                        {country}
                    </ul>
                </>
            );
        }
        
        export default Countries;

         */
     );
}
 
export default Home;