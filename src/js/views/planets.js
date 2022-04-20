import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {

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
				<img className="col-3" src= {"https://starwars-visualguide.com/assets/img/characters/" + store.info.uid + ".jpg"}></img>
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
							<p>Birth Year</p>
							<p className="card-text">{store.info.properties.birth_year}</p>
						</div>
						<div>
							<p>Gender</p>
							<p className="card-text">{store.info.properties.gender}</p>
						</div>
						<div>
							<p>Heigth</p>
							<p className="card-text">{store.info.properties.height}</p>
						</div>
						<div>
							<p>Skin Color</p>
							<p className="card-text">{store.info.properties.skin_color}</p>
						</div>
						<div>
							<p>Eye Color</p>
							<p className="card-text">{store.info.properties.eye_color}</p>
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


Planet.propTypes = {
	match: PropTypes.object
};
