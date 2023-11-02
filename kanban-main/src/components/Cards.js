import React from 'react';
// import image832 from '../as/832.png';


export default function Cards(props) {

    console.log('props recieved : ')
    console.log(props)
    // console.log(props.title)
    // console.log(props.id)
    // console.log(props.tag)
    return (
        <div className="card">
            <div className="conatiner" key={props.id}>
                <div className="img">
                    <p className="card-id">{props.id}</p>            
                    <img src="./components/832.jpg" alt="avatar" />
                </div>
                <input type="checkbox" className='rounded-checkbox' id={props.id} name="fav_language" onClick={props.toggleCheck} />
                <label className='card-title' htmlFor={props.id}>{props.title}</label> 
                <span className='feature'>
                    <div className="icon">
                        <strong >!</strong>
                    </div>
                    <div className="feature">
                        {/* <span className="circle"></span> */}
                        <p className="card-tag">{props.tag}</p>
                    </div>
                </span>           
            </div>
        </div>
    );
}
