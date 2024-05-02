import PageContainer from "../components/PageContainer/PageContainer"
import Cards from 'react-credit-cards'
import Input from "../components/Input/Input.jsx"
import Button2 from "../components/Button/Button2.jsx"
import Button from "../components/Button/Button.jsx"
import "./Pay.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Pay = () => {

    const [number, setNumber] = useState("")
    const [name, setName] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvc, setCVC] = useState("")
    const [parcela, setParcelas] = useState("")
    const [focus, setFocus] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event) => {

        event.preventDefault()

        axios.post("https://lista-de-presentes-silk.vercel.app/payment", {

            "number":number,
            "name":name,
            "month": expiry.split("/")[0],
            "year": expiry.split("/")[1],
            "code":cvc,
            "cart_id":localStorage.getItem("cart_id")

        }).then(() => {

            navigate("/info")

        })

    }

    return (

        <>
        
            <PageContainer stepper>

                <div className="container-all-payment">

                    <h1 className="h1-title-payment">Faça o pagamento e finalize a jornada</h1>

                    <Cards
                        cvc={cvc}
                        expiry={expiry}
                        focused={focus}
                        name={name}
                        number={number}

                            placeholders={{name:"Seu nome aqui"}}
                            locale={{valid:"validade"}} />

                    <form className="form-all-payment" onSubmit={handleSubmit}>

                        <div className="form-credentials-payment">

                            <Input placeholder="Coloque o número do cartão aqui" label="Número do cartão" name="number" onChange={(event) => setNumber(event.target.value)} onFocus={(event) => setFocus(event.target.name)}/>
                            <Input placeholder="Coloque o nome aqui" label="Nome" name="name" onChange={(event) => setName(event.target.value)} onFocus={(event) => setFocus(event.target.name)}/>

                            <Input placeholder="Data de expiração" label="Vencimento" className="input-month-year-payment" name="expiry" onChange={(event) => setExpiry(event.target.value)} onFocus={(event) => setFocus(event.target.name)}/>


                                <div className="form-input-cardCredentials-payment">

                                    <Input placeholder="CVV" label="CVV" className="input-CVV-payment" name="cvc" onChange={(event) => setCVC(event.target.value)} onFocus={(event) => setFocus(event.target.name)}/>
                                    <Input placeholder="1 x R$ 123,00" label="Parcelamento" className="input-parcelas-payment" name="parcelas"/>

                                </div>


                        </div>

                        <div className="form-buttons-payment">

                            <Button label="Voltar ao passo anterior"/>
                            <Button2 label="Efetuar pagamento"/>

                        </div>


                    </form>

                </div>

            </PageContainer>

        </>

    )

}

export default Pay