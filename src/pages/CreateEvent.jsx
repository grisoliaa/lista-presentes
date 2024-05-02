import "./CreateEvent.css"
import PageContainer from "../components/PageContainer/PageContainer.jsx"
import Input from "../components/Input/Input.jsx"
import Button from "../components/Button/Button.jsx"
import Button2 from "../components/Button/Button2.jsx"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateEvent = () => {

    const navigate = useNavigate()

    const newEvent = () => {
        event.preventDefault()
        var name = document.getElementById("event")
        var type = document.getElementById("type")
        var theme = document.getElementById("theme")
            
        axios.post("https://lista-de-presentes-silk.vercel.app/events", {

            name:event.value , type:type.value, theme:theme.value

        }).then(() => navigate("/events"))

    }

    return (

        <PageContainer>

            <div className="container-all-createevent">

                <h1 className="h1-title-createevent">Preencha o formulário e crie o evento</h1>

                <form className="form-createevent" onSubmit={newEvent}>

                    <div className="inputs-createevent">

                        <Input placeholder="Coloque o nome do evento aqui" label="Nome do evento" id="event"/>
                        <Input placeholder="Coloque o tipo do evento" label="Tipo de evento" id="type"/>
                        <Input placeholder="Escolha o tema do seu site" label="Tema" id="theme"/>

                    </div>

                    <div className="buttons-form-createevent">

                        <Button label="Voltar aos eventos" onClick={() => navigate("/events")}/>
                        <Button2 label="Criar Evento" type="submit"/>

                    </div>

                </form>

            </div>

        </PageContainer>

    )

}

export default CreateEvent