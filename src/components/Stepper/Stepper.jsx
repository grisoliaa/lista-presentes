import "./Stepper.css"
import img1 from "../../assets/img1-buy.svg"
import img2 from "../../assets/img2-buy.svg"
import img3 from "../../assets/img3-buy.svg"
import arrowLeft from "../../assets/arrow-left-buy.svg"

const Stepper = () => {

    return(
        
            <div className="horizontal-stepper-buy">

                        <img src={arrowLeft} className="arrow-left-buy"/>

                        <div className="stepper-content-buy">

                            <div className="stepper-all-h1-buy">

                                <img src={img1}/>
                                <h1 className="stepper-h1-buy">Carrinho</h1>

                            </div>

                            <div className="hr-stepper-buy">

                            </div>

                            <div className="stepper-all-h1-buy">

                                <img src={img2}/>
                                <h1 className="stepper-h1-buy">Step Title</h1>

                            </div>

                            <div className="hr-stepper-buy">

                            </div>

                            <div className="stepper-all-h1-buy">

                                <img src={img3}/>
                                <h1 className="stepper-h1-buy">Step Title</h1>

                            </div>

                        </div>

                    </div>

    )

}

export default Stepper