import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = (props) => {

    const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.getOneVehicle(params.theid);
	}, [])

    return (
		<div className="container d-flex flex-column justify-content-center">
			{store.info.uid ? <div className="row">
				<h1 className="display-4 text-center">{store.info.properties.name}</h1>
				<hr className="my-4" />
				<img className="col-3" src= {"https://starwars-visualguide.com/assets/img/vehicles/" + store.info.uid + ".jpg"}></img>
				<div className="col-6">
					<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
				</div>
				<hr className="my-4 text-danger"></hr>
				<div className="container">
					<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 text-danger text-center">
						<div>
							<p>Model</p>
							<p className="card-text">{store.info.properties.model}</p>
						</div>
						<div>
							<p>Vehicle class</p>
							<p className="card-text">{store.info.properties.vehicle_class}</p>
						</div>
						<div>
							<p>Manufacturer</p>
							<p className="card-text">{store.info.properties.manufacturer}</p>
						</div>
						<div>
							<p>Cost in credits</p>
							<p className="card-text">{store.info.properties.cost_in_credits}</p>
						</div>
						<div>
							<p>Passengers</p>
							<p className="card-text">{store.info.properties.passengers}</p>
						</div>
						<div>
							<p>Max atmosphering speed</p>
							<p className="card-text">{store.info.properties.max_atmosphering_speed}</p>
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


Vehicles.propTypes = {
	match: PropTypes.object
};