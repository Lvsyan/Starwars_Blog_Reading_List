import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(()=>{
		// actions.getCharacters();
		// actions.getPlanets();
		// actions.getVehicles();
	}, [])
	
	return (
		<div>
			{/* Characters */}
			<div className="container">
				<h1>Characters</h1>
				<div className="d-flex overflow-auto">
						{store.characters.length > 0 ? store.characters.map((character)=>{
							let changeColor = "bg-warning";
							if(store.fav.includes(character.properties.name)){
								changeColor = "bg-danger"
							}
							return <div key={character.uid} className="container">
										<div className="card" style={{width: "18rem"}}>
											<img src={"https://starwars-visualguide.com/assets/img/characters/" + character.uid + ".jpg"} className="card-img-top" alt="..."/>
											<div className="card-body">
												<h5 className="card-title">{character.properties.name}</h5>
												<p className="card-text">{character.description}</p>
												<p className="card-text">Gender: {character.properties.gender}</p>
												<p className="card-text">Hair Color: {character.properties.hair_color}</p>
												<p className="card-text">Eye-color: {character.properties.eye_color}</p>
												<div>
													<Link to={"/single/" + character.uid}>
														<button className="btn btn-primary">More info</button>
													</Link>
													<button className={"ms-5 " + changeColor} onClick={()=>{
														actions.conteo(character.properties.name)
													}}><i className="fas fa-heart"></i></button>
												</div>
											</div>
										</div>
									</div>
						}) : <h1>Loading</h1>}
				</div>
			</div>

			{/* Characters */}

		</div>
	)
};
