import { useState } from "react"

export default function Form() {
    const [ name, setName] = useState("")
    const [ movie, setMovie ] = useState("")

    function handleNameChange(event){
        setName(event.target.value + "!")
    }

    return (
        <form>
            <label><strong>Name </strong>
                <input name="name" value={name} onChange={handleNameChange}/>
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
                <input name="movie" value={movie} onChange={event => setMovie(event.target.value)}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>{name.length} + {movie.length}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}