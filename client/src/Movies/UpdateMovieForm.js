/** @jsx jsx */
import React from 'react';
import { useForm } from "react-hook-form";

import {css, jsx} from '@emotion/core'




const UpdateMovieForm = () => {
    const {register, handleSubmit, reset}= useForm()
    const onSubmit = data => console.log(data);

    const base = css({
        border: 'none',
        height: "30px",
        background: "#f2f2f2",
        borderBottom: "1px solid black", 
        margin: "10px"
    })


    return ( 
        <div
        css={{
            textAlign: 'center'
        }}>
            <h3>Update Movie</h3>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            css={{
                display: 'flex', 
                flexDirection: 'column', 
                width: '40%',
                margin: '0 auto'
            }}
            >
                <input
                name="title"
                css={base}
                ref={register}
                 />
                 <input
                name="director"
                css={base}
                ref={register}
                 />
                 <input
                name="metascore"
                css={base}
                ref={register}
                 />
                 <input
                name="stars"
                css={base}
                ref={register}
                 />

                <button css={{
                    border: "1px solid grey",
                    padding: '5px 10px',
                    backgroundColor: 'lightseagreen',
                    width: '50%',
                    alignSelf: 'center'
                }}>Submit</button>
            </form>
            
        </div>
     );
}
 
export default UpdateMovieForm;