import Casa from '../components/Casa'

export default function Linha(props) {
    const styleLine = {
        display: "flex"
    }
    return (
        <div style={styleLine}>
            <Casa black={props.startBlack}/>
            <Casa black={!props.startBlack}/>
            <Casa black={props.startBlack}/>
            <Casa black={!props.startBlack}/>
            <Casa black={props.startBlack}/>
            <Casa black={!props.startBlack}/>
            <Casa black={props.startBlack}/>
            <Casa black={!props.startBlack}/>
        </div>
    )
}