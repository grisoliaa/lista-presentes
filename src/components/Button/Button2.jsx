import PageContainer from "../PageContainer/PageContainer"
import "./Button2.css"

const Button2 = (props) => {

    return (

        <button className="button-sendMessage-info" {...props} > {props.label} </button>

    )

}

export default Button2