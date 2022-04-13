import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.getOneCharacter(params.theid);
	}, [])

	return (
		<div className="container d-flex flex-column justify-content-center">
			{store.info.uid ? <div className="row">
				<h1 className="display-4 text-center">{store.info.properties.name}</h1>
				<hr className="my-4" />
				<img className="col-3" src= {"https://starwars-visualguide.com/assets/img/characters/" + store.info.uid + ".jpg"}></img>
				<div className="col-6">
					<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
					<p className="card-text">{store.info.properties.hair_color}</p>
					<p className="card-text">{store.info.properties.skin_color}</p>
					<p className="card-text">{store.info.properties.eye_color}</p>
				</div>
			</div> : <h1 className="text-center">Loading</h1>}
			



			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
