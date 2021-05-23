import './index.css';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);

function MainPage() {
    const [products, setProducts] = React.useState([0]);
    React.useEffect(
        function(){
        axios.get('http://localhost:8080/products')
        .then(result => {
            console.log(result);
            const products = result.data.products;
            setProducts(products);
        })
        .catch(error => {
        console.error("에러발생!!",error)
    })
        },[])
    
    return ( 
    <div>
            <div id="banner">
                <img src="images/icons/banner1.png"/>
            </div>
            <h1>판매상품</h1>
            <div id="product-list">
                {products.map(function(product, index){
                        return (
                <div className="product-card">
                    <Link className="product-link" to={`/products/${product.id}`}>
                    <div>
                        <img className="product-img" src={product.imageUrl}/>
                    </div>
                    <div className="product-contents">
                        <span className="product-name">
                            <span>{product.name}</span>
                        </span>
                        <span className="product-price">
                            <span>{product.price}</span>
                        </span>
                        <div className="product-footer"> 
                            <div className="product-seller">
                                <img className="product-avatar" src="images/icons/avatar.png"/>
                                <span>{product.seller}</span>
                            </div>
                            <span className="product-date">{dayjs(product.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    </Link>
                </div>
                        )
                    })
                }
            </div>

    </div>
    );
}

export default MainPage;