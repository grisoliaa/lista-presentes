import "./Home.css"
import img1Home from "../assets/img1-home.svg"
import img2Home from "../assets/img2-home.svg"
import PageContainer from "../components/PageContainer/PageContainer.jsx"
import { useEffect,useState } from "react"
import axios from "axios"
import Button from "../components/Button/Button.jsx"
import {useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate() 

    const [products,setProducts] = useState([])


    useEffect(() => {


        axios.get("https://lista-de-presentes-silk.vercel.app/daniela-oliveira").then((response) => setProducts(response.data.products))

        const cartID = localStorage.getItem("cart_id")

        if (!cartID){

            

            axios.post("https://lista-de-presentes-silk.vercel.app/cart", {}).then((response) => {
            localStorage.setItem("cart_id", response.data.id)
        })

        }

    },[])

    const comprarItem = (id) => {

        console.log(id)

        axios.post("https://lista-de-presentes-silk.vercel.app/cart/products", {

            cart_id:localStorage.getItem("cart_id"), products:[id]

        }).then((response) => {

            navigate("/buy")

        }).catch((error) => console.log(error))

    }

        console.log(products)

    return (

        <>
            <PageContainer>

                <h1 className="h1-title-home">Deseje felicitações para sua amiga <br/>Daniela Oliveira</h1>
                <h1 className="h1-title2-home">Compre um presente para sua amiga e deixe uma linda mensagem de <br/>felicitações com muito carinho e amor</h1>
                <img src={img1Home} className="img1-home"/>

                <div className="h1-wrapper-home">

                    <h1 className="h1-listaPresentes-home">Lista de Presentes</h1>
                    <hr className="hr-home"/>

                </div>

                <div className="container-products-home">

                    <div className="products-column-home">

                        {products.map((product,index) => (

                            <div className="product-card-home" key={index}>

                                    <img src={product.image} className="img2-home"/>
                                    <h1 className="h1-products-home"> {product.name} </h1>
                            
                                <div className="product-price-home">

                                    <h1 className="h1-products2-home"> {product.price} </h1>
                                    <h6 className="h6-products2-home">,00</h6>

                                </div>


                                 <button className="button-cardBuy-home" onClick={() => comprarItem(product.id)}>

                                    Comprar

                                 </button>

                            </div>

                        ))}

                        

                    </div>

                </div>

            </PageContainer>
        
        </>

    )

}

export default Home