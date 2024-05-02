import PageContainer from "../components/PageContainer/PageContainer.jsx"
import Stepper from "../components/Stepper/Stepper.jsx"
import "./Buy.css"
import imgProduct from "../assets/img2-home.svg"
import {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Buy = () => {


    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        axios.get("https://lista-de-presentes-silk.vercel.app/cart/123").then((response) => setProducts(response.data.products))

    }, [])

    const addItem = () => {

        navigate("/")

    }

    const concluirCompra = () => {

        navigate("/payment")

    }

    return (

        <>
        
            <PageContainer stepper>

                <div className="container-all-buy">

                    <div className="container-items-buy">

                        <div className="rectangle1-content-all-buy">

                            <div className="rectangle1-content">

                                <h1 className="rectangle-h1-css-buy">Descrição</h1>
                                <div className="rectangle1-h1-buy">

                                    <h1 className="rectangle-h1-css-buy">Valor</h1>

                                </div>

                            </div>

                        </div>

                        {products.map((product,index) => (

                            <div className="rectangle2-content-all-buy" key={index}>

                                <div className="rectangle2-padding-buy">

                                    <div className="rectangle2-content1-buy">

                                        <img src={product.image} className="img-product-buy"/>
                                        <h1 className="rectangle2-h1-css-buy"> {product.name} </h1>

                                    </div>

                                    <div className="rectangle2-content2-buy">

                                        <div className="product-price-buy">

                                            <h1 className="h1-products-buy"> {product.price} </h1>
                                            <h6 className="h6-products-buy">,00</h6>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="container-buttons-buy">

                        <button className="button-addMore-buy" onClick={addItem}> Adicionar mais itens </button>
                        <button className="button-completePurchase-buy" onClick={concluirCompra}>Concluir Compra</button>

                    </div>

                </div>

            </PageContainer>

        </>

    )

}

export default Buy