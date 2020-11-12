/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useParams, useHistory } from 'react-router-dom'

import {css, jsx} from '@emotion/core'

const initialMovie = { 
            director: '', 
            id: 0, 
            metascore: '',
            stars: '',
            title: ''
}

const UpdateMovieForm = () => {
    const [movie, setMovie] = useState({});
    const params = useParams();
    const history = useHistory()
    const {register, handleSubmit, reset}= useForm({ 
        mode: "onBlur", 
        
    })

    const editMovie = (updatedMovie) => { 
        axios
        .put(`http://localhost:5000/api/movies/${updatedMovie.id}`, updatedMovie)
        .then((res) => { 
            console.log(res)
        })
        .catch((err) => console.log(err.response));
    };
    
   
    
  
    const fetchMovie = (id) => {
      axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then((res) => { 
            setMovie(res.data)
            reset({ 
                director: res.data.director, 
                metascore: res.data.metascore,
                stars: res.data.stars,
                title: res.data.title

            })
            
        })
        .catch((err) => console.log(err.response));
    };

    useEffect(() => {
        fetchMovie(params.id);
        
      }, [params.id]);

      

    const onSubmit = data => { 
        let starArr = data.stars.split(",")

        
        const updatedMovie = { 
            id: movie.id,
            director: data.director, 
            metascore: data.metascore,
            title: data.title,
            stars: starArr
        }
        
        editMovie(updatedMovie)
        setMovie(updatedMovie)
        history.push(`/movies/${updatedMovie.id}`)
    }



    const base = css({
        border: 'none',
        height: "30px",
        background: "#f2f2f2",
        borderBottom: "1px solid black", 
        margin: "10px", 
        fontSize: '15px'
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
                margin: '0 auto', 
                
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
                 <label>Use commas , between stars.</label>

                <button css={{
                    border: "1px solid grey",
                    padding: '5px 10px',
                    margin: '10px',
                    backgroundColor: 'lightseagreen',
                    width: '50%',
                    alignSelf: 'center'
                }}>Submit</button>
            </form>
            
        </div>
     );
}
 
export default UpdateMovieForm;