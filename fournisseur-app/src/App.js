import React from 'react';
import Fournisseur from './components/Fournisseur';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	return (
		<>
		<div className="sidebar">
			<a className="active" href="#home">Dashboard</a>
			<a href="#news">Login</a>
			<a href="#contact">Connection</a>
			<a href="#about">Fournisseur</a>
		</div>

<div>
			<Fournisseur />
		</div>
		</>
		
	);
};

export default App;