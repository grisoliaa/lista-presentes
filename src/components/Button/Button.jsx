import PageContainer from "../PageContainer/PageContainer"
import "./Button.css"

const Button = (props) => {

    return (

        <button className="button-back" {...props}> {props.label} </button>

    )

}

export default Button