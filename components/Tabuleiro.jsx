import Linha from '../components/Linha'

export default function Tabuleiro() {
    return (
        <div>
            {geraLinha()}
        </div>
    )
}

const geraLinha = () => {
    let lines = []
    for (let i = 1; i <=8; i++) {
        i % 2 == 0 ? lines.push(<Linha startBlack={true}/>) : lines.push(<Linha/>)
    }
    return lines
}