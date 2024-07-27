import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [products, setProduct] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const handleProductList = async () => {
        let product = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`);
        product = await product.json();
        console.log(product);
        setProduct(product.products);
        setTotalPage(product.total);
    }

    useEffect(() => {
        handleProductList();
        console.log("page ",page)
        console.log("offset ",offset)
        console.log("limit ",limit)
    }, [page,offset]);

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>images</td>
                        <td>title</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 ?
                            products.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td><img src={val.images} alt="" width="50" height="50" /></td>
                                        <td>{val.title}</td>
                                        <td>{val.price}</td>
                                    </tr>
                                );
                            }) : null
                    }

                </tbody>
            </table>
            {
                totalPage > 0 ?
                    <div className="pagination">
                        {
                            page != 1 ? <span className="prev" onClick={() => {setPage(page-1);setOffset(offset - limit)}}> ⬅️ </span> : null
                        }
                        {
                            [...Array(Math.ceil(totalPage / limit))].map((_, i) => <span key={i} onClick={() => {setPage(i + 1);setOffset(limit*i)}} className={page == i + 1 ? 'active page' : 'page'}>{i + 1}</span>)
                        }
                        {
                            page != Math.ceil(totalPage / limit) ? <span className="next" onClick={() => {setPage(page+1);setOffset(limit + offset)}}> ➡️ </span> : null
                        }
                        
                    </div>
                    : null
            }

        </div>
    )
}

export default App
