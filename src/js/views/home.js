import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(()=>{
		actions.getCharacters();
	}, [])
	
	return (
		<div>
			<h1>Characters</h1>
			<div className="row">
			{store.characters.map((character)=>{
				return <div key={character} className="card" style={{width: "18rem"}}>
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<Link to={"/single" + character.uid}>
									<a href="#" className="btn btn-primary">More info</a>
								</Link>
							</div>
						</div>
			})}
			</div>
		</div>
	)
};
