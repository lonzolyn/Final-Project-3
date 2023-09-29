import { useState } from 'react'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '3px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '10vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }


    const simpleView = () => {
        return (
        <div >

            <div className="wrapper">
                <div className= "content">
                    <h3>{props.item.fullName}</h3>
                    <img src={props.item.images[0].url}/>
                    <i><p>{props.item.images[0].title}, {props.item.images[0].credit}</p></i>
                    <i><p>{props.item.images[0].caption}</p></i>
                    
                    
                </div>
            </div>
        </div>
        )
    }

    const detailView = () => {
        return (
            <div class="wrapper">
                <div class= "content">
                        <h3>{props.item.fullName}</h3>
                        <div class ="row" >
                            <div class ="column">
                        <img src={props.item.images[3].url}/>
                        <p><i>{props.item.images[3].title} ,{props.item.images[3].credit}</i></p>
                            <p><i>{props.item.images[3].caption}</i></p>
                        </div>

                        <div class ="column">
                        <img src={props.item.images[4].url}/>
                        <p><i>{props.item.images[4].title} ,{props.item.images[4].credit}</i></p>
                        <p><i>{props.item.images[4].caption}</i></p>
                        </div>
                    </div>
                        <p><h5> A Brief Description</h5>{props.item.description}</p>
                        <p>Located in {props.item.addresses[1].city} , {props.item.states}</p>
                        <h5> Things To Do</h5>
                        <ul>
                        <li><p>{props.item.activities[1].name}</p></li>
                        <li><p>{props.item.activities[2].name}</p></li>
                        <li><p>{props.item.activities[3].name}</p></li>
                        <li><p>{props.item.activities[4].name}</p></li>
                        <li><p>{props.item.activities[5].name}</p></li>
                        </ul>
                        <h5>Park Weather</h5>
                        <p>{props.item.weatherInfo}</p>
                        <br></br>
                    </div>
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
