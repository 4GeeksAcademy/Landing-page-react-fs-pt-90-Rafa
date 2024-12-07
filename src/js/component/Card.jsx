import React from "react"

const Card = (props) => {
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card-footer">
                    <button type="button" class="btn btn-primary btn-sm">Find out more!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;