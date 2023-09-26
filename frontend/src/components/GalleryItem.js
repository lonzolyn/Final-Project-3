import { useState } from 'react'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div>
                <h3>{props.item.fullName}</h3>
                <h4>{props.item.description}</h4>
                <h4>{props.item.addresses[1].city}</h4>
                <h4>{props.item.activities[3].name}</h4>
                <h4>{props.item.activities[2].name}</h4>
                <h4>{props.item.activities[1].name}</h4>
                <h4>{props.item.weatherInfo}</h4>
                <img src={props.item.images[0].url}/>
                
            </div>
        )
    }

    const detailView = () => {
        return (
            <div>
                <h2>{props.item.fullName}</h2>
                <h3>{props.item.description}</h3>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}

export default GalleryItem
