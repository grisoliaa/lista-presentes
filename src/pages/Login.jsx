import "./Login.css"
import PageContainer from "../components/PageContainer/PageContainer.jsx"
import Input from "../components/Input/Input.jsx"
import Button from "../components/Button/Button.jsx"
import Button2 from "../components/Button/Button2.jsx"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

    const makeLogin = (event) => {
        event.preventDefault()

        var email = document.getElementById("email")
        var password = document.getElementById("password")
            console.log(email)
            console.log(password)

        axios.post("https://lista-de-presentes-silk.vercel.app/login", {

            email:email.value, password:password.value

        }).then((response) => {

            var token = response.data.token
            localStorage.setItem("token", token)

            navigate("/events")
        })
    }

    return (

        <PageContainer>

            <div className="container-all-login">

                <h1 className="h1-title-login">Faça seu login e crie seu evento</h1>

                <form className="form-login" onSubmit={makeLogin}>

                    <div className="inputs-login">

                        <Input placeholder="Coloque seu e-mail" label="Email" id="email"/>
                        <Input placeholder="Coloque sua senha" label="Senha"id="password"/>

                    </div>

                    <div className="buttons-login">
                        
                        <Button2 label="Entrar" type="submit"/>
                        <Button label="Criar conta"/>    
                    
                    </div> 

                </form>

            </div>

        </PageContainer>

    )

}

export default Login