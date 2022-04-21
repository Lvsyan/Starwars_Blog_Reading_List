import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {

    const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.getOnePlanet(params.theid);
	}, [])

    return (
		<div className="container d-flex flex-column justify-content-center">
			{store.info.uid ? <div className="row">
				<h1 className="display-4 text-center">{store.info.properties.name}</h1>
				<hr className="my-4" />
				<img className="col-3" src= {"https://starwars-visualguide.com/assets/img/planets/" + store.info.uid + ".jpg"}></img>
				<div className="col-6">
					<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
				</div>
				<hr className="my-4 text-danger"></hr>
				<div className="container">
					<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 text-danger text-center">
						<div>
							<p>Name</p>
							<p className="card-text">{store.info.properties.name}</p>
						</div>
						<div>
							<p>Diameter</p>
							<p className="card-text">{store.info.properties.diameter}</p>
						</div>
						<div>
							<p>Gravity</p>
							<p className="card-text">{store.info.properties.gravity}</p>
						</div>
						<div>
							<p>Population</p>
							<p className="card-text">{store.info.properties.population}</p>
						</div>
						<div>
							<p>Climate</p>
							<p className="card-text">{store.info.properties.climate}</p>
						</div>
						<div>
							<p>Terrain</p>
							<p className="card-text">{store.info.properties.terrain}</p>
						</div>
					</div>
				</div>
			</div> : <h1 className="text-center">Loading</h1>}


			<Link to="/">
				<span className="btn btn-primary btn-lg m-5" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};


Planets.propTypes = {
	match: PropTypes.object
};
