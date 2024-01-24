import {useParams} from 'react-router-dom'

const Shop = (props) => {
    const params = useParams()
    console.log(params);
    return(
        <div>
            <h1>Shop</h1>
            <h2>Product : {params.id}</h2>
        </div>
    );
}

export default Shop