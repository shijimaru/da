import { Card } from "./Card"

function List(props) {
    const {movies} = props

    return <div>
        {movies.map(movie => {
            <Card {...Card}/>
        })}
    </div>
}

export {List}