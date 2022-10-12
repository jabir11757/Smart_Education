import React from 'react';
import './Card.css'

const Card = ({ option }) => {
    return (
        <div className='card-container'>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Card;