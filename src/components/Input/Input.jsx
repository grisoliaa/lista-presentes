import PageContainer from "../PageContainer/PageContainer"
import "./Input.css"

const Input = (props) => {

    return (

            <div className="input-all-form-info">

                <span className="span-form-info"> {props.label} </span>
                <input className="input-form-info" {...props}/>

            </div>

    )

}

export default Input