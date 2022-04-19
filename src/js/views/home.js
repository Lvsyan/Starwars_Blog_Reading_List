import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(()=>{
		//actions.getCharacters();
	}, [])
	
	return (
		<div>
			<h1>Characters</h1>
			<div className="row justify-content-center p-5">
			{store.characters.length > 0 ? store.characters.map((character)=>{
				return <div key={character.uid} className="card" style={{width: "16rem"}}>
								<img src={"https://starwars-visualguide.com/assets/img/characters/" + character.uid + ".jpg"} className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{character.properties.name}</h5>
									<p className="card-text">{character.description}</p>
									<p className="card-text">Gender: {character.properties.gender}</p>
									<p className="card-text">Hair Color: {character.properties.hair_color}</p>
									<p className="card-text">Eye-color: {character.properties.eye_color}</p>
									<Link to={"/single/" + character.uid}>
										<button className="btn btn-primary">More info</button>
									</Link>
								</div>
						</div>
			}) : <h1>Loading</h1>}
			</div>
		</div>
	)
};
