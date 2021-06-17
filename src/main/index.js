import './index.css';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import {API_URL} from "../config/constants.js"
import {Carousel} from 'antd';
import ProductCard from '../components/productCard';

dayjs.extend(relativeTime);
dayjs.locale("ko");

function MainPage() {
    const [products, setProducts] = React.useState([0]);
    const [banners, setBanners] = React.useState([]);
    React.useEffect(
        function(){
        axios.get(`${API_URL}/products`)
        .then(result => {
            console.log(result);
            const products = result.data.products;
            setProducts(products);
        })
        .catch(error => {
        console.error("에러발생!!",error)
        });

        axios.get(`${API_URL}/banners`)
        .then((result) => {
            const banners = result.data.banners;
            setBanners(banners);
        })
        .catch((error) => {
            console.error("에러발생 : ",error)
        })
    },[])
    
    return ( 
    <div>
        <Carousel autoplay autoplaySpeed={3000}>
            {
                banners.map((banner, index) => {
                    return (
                        <Link to={banner.href}>
                            <div id="banner">
                                <img src={`${API_URL}/${banner.imageUrl}`}/>
                            </div>
                        </Link>
                    )
                })
            }
        </Carousel>
            <h1 id="product-headline">판매상품</h1>
            <div id="product-list">
                {products.map(function(product, index){
                        return (
                            <ProductCard product={product} key={index}/>
                        );
                    })}
            </div>

    </div>
    );
}

export default MainPage;