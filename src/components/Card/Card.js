import React from 'react';
import './Card.css'

const Card = ({ option }) => {
    return (
        <div className='card-container '>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Card;