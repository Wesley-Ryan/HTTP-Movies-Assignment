import React from 'react';
import { useForm } from "react-hook-form";

const UpdateMovieForm = () => {
    const {register, handleSubmit, reset}= useForm()
    return ( 
        <div>
            <form>
                <input
                name="title"
                ref={register}
                 />
                 <input
                name="director"
                ref={register}
                 />
                 <input
                name="metascore"
                ref={register}
                 />
                 <input
                name="stars"
                ref={register}
                 />

                <button>Submit</button>
            </form>
            
        </div>
     );
}
 
export default UpdateMovieForm;