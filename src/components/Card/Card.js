import React from 'react';
import { toast } from 'react-toastify';
import Toast from '../Toast/Toast';
import './Card.css'

const Card = ({ option, correctAnswer }) => {


    const handleChange = (e) => {
        let checked = e.target.value
        if (checked === correctAnswer) {
            toast('Right Answer Selected');
        }
        else {
            toast('Wrong Answer!');
        }
    }

    //     // let selectedAnswer = e.target.value;
    //     // if (selectedAnswer === correctAnswer) {
    //     //    
    //     // }
    //     // else {
    //     //     toast('Wrong Answer, Mair khaba ?');
    //     // }
    // }



    return (
        <div className='card-container '>
            <div class="form-check">
                <input onClick={handleChange} value={option} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1"  >
                    {option}
                </label>
            </div>
            <Toast handleChange={handleChange} />
        </div>
    );
};

export default Card;