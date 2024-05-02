import "./Info.css"
import PageContainer from "../components/PageContainer/PageContainer.jsx"
import Input from "../components/Input/Input.jsx"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Info = () => {

    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [areaCode, setAreaCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post("https://lista-de-presentes-silk.vercel.app/message", {

        "name": name,
        "email": email,
        "area_code": areaCode,
        "phone_number": phoneNumber,
        "message": message,
        "cart_id":localStorage.getItem("cart_id")

        }).then(() => {

            navigate("/")

        })
    }

    return (

        <>
        
            <PageContainer stepper={true}>

                <div className="container-all-info">

                    <h1 className="h1-title-info"> Conte para Daniela Oliveira quem é você </h1>

                    <form className="form-info" onSubmit={handleSubmit}>

                        <div className="form-credentials-info">

                            <Input placeholder="Coloque seu nome aqui" label="Nome" onChange={(event) => setName(event.target.value)}/>

                            <Input placeholder="Coloque seu email aqui" label="Email" onChange={(event) => setEmail(event.target.value)}/>


                                <div className="inputs-number-all-info">

                                        <div className="input-all-form-info">

                                            <Input className="input-form-info-ddd" placeholder="DDD" label="DDD" onChange={(event) => setAreaCode(event.target.value)}/>

                                        </div>

                                        <div className="input-all-form-info">

                                            <Input className="input-form-info-number" placeholder="Coloque seu telefone aqui" label="Telefone" onChange={(event) => setPhoneNumber(event.target.value)}/>

                                        </div>

                                </div>

                            <div className="input-all-form-info">

                                <span className="span-form-info">Escreva uma mensagem para Daniela</span>
                                <textarea placeholder="Escreva sua mensagem aqui..." className="textarea-form-info" onChange={(event) => setMessage(event.target.value)}/> 

                            </div>

                        </div>

                        <div className="buttons-form-info">

                            <button className="button-backCart-info"> Voltar ao carrinho </button>
                            <button className="button-sendMessage-info"> Enviar Mensagem </button>

                        </div>

                    </form>

                </div>

            </PageContainer>
        
        </>

    )

}

export default Info