import "./Events.css"
import PageContainer from "../components/PageContainer/PageContainer.jsx"
import Button2 from "../components/Button/Button2.jsx"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Events = () => {

    const navigate = useNavigate()

    const [events, setEvents] = useState([])

    useEffect(() => {

        axios.get("https://lista-de-presentes-silk.vercel.app/events").then((response) => setEvents(response.data))

    },[])

    return (

        <PageContainer>

            <div className="container-all-events">

                <h1 className="h1-title-events">Veja seus eventos</h1>

                <div className="container-events">

                    <div className="top-header-container-events">

                        <h1 className="h1-header-events">Nome</h1>
                        <div className="h1s-style-events">
                            <h1 className="h1-header-events">Convidados</h1>
                            <h1 className="h1-header-events">Valor</h1>
                        </div>

                    </div>

                    {events.map((event) => (

                        <div className="rectangle-container-events" key={event.id}>

                            <div className="rectangle-style1-container-events">

                                <h1 className="h1-rectangle-container-events"> {event.name} </h1>

                            </div>

                            <div className="rectangle-style2-container-events">

                                <h2 className="h2-rectangle-container-events"> {event.invitations} </h2>
                                <h2 className="h2-rectangle-container-events"> {event.amount} </h2>

                            </div>

                        </div>

                    ))}

                    <div className="button-events">

                        <Button2 className="button-sendMessage-info" label="Criar evento" onClick={() => navigate("/createevent")}/>

                    </div>

                </div>

            </div>

        </PageContainer>

    )

}

export default Events