import "./PageContainer.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Stepper from "../Stepper/Stepper"

const PageContainer = (props) => {

    return (

        <div className="page-container">

            <Header/>

                {props.stepper && (

                    <Stepper/>

                )}

            {props.children}

            <Footer/>

        </div>

    )

}

export default PageContainer