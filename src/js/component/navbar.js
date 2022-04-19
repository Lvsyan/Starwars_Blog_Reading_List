import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3" style = {{width: "100%"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png" width={150} height={100}></img></span>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Favorites{store.fav.length}
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.fav.map((incrementar, i)=>{
								return (
									<li key={i} className="dropdown-item" type="button">
										{incrementar}
									</li>
								)
							})}
						</ul>
					</div>
			</div>
		</nav>
	);
};
