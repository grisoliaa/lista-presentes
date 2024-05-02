import "./Create.css"
import PageContainer from "../components/PageContainer/PageContainer.jsx"
import Input from "../components/Input/Input.jsx"
import Button from "../components/Button/Button.jsx"
import Button2 from "../components/Button/Button2.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Create = () => {

    const navigate = useNavigate()

    const createUser = (event) => {

        event.preventDefault()
        var name = document.getElementById("name")
        var email = document.getElementById("email")
        var password = document.getElementById("password")
        
        axios.post("https://lista-de-presentes-silk.vercel.app/create-user", {

            name:name.value , email:email.value , password:password.value

        }).then(() => {navigate("/login")})

    }



    return(

        <PageContainer>

            <div className="container-all-create">

                <h1 className="h1-title-create">Crie sua conta antes de criar o evento</h1>

                <form className="form-create" onSubmit={createUser}>

                    <div className="inputs-create">

                        <Input placeholder="Preencha com seu nome" label="Nome" id={"name"}/>
                        <Input placeholder="Coloque seu e-mail aqui" label="Email" id={"email"}/>
                        <Input placeholder="Colloque sua senha aqui" label="Senha" id={"password"}/>

                    </div>

                    <div className="buttons-create">

                        <Button2 label="Entrar"/>
                        <Button label="Criar conta" type="submit"/>  

                    </div>

                </form>

            </div>

        </PageContainer>

    )

}

export default Create