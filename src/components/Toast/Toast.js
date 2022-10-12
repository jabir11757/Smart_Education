import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

// const notify = () => {
//     toast("first toast");
// }

const Toast = ({ answerHandler }) => {
    return (
        <div>
            {answerHandler}
            <ToastContainer />
        </div>
    );
};

export default Toast;