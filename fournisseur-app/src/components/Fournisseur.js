import React, { useState, useEffect } from 'react';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFournisseur from './AddFournisseur';
import FournisseurTable from './FournisseurTable';




const Fournisseur = () => {
	const [modal, setModal] = useState(false);
	const [fournisseurList, setFournisseurList] = useState([])

	useEffect(() => {
		let arr = localStorage.getItem("fournisseurList");
		
		if (arr){
			let obj = JSON.parse(arr);
			setFournisseurList(obj);
		}
	}, []);

	const toggle = () => setModal(!modal);

	const saveFournissuer = (fournisseurObj) => {
		let tempList = fournisseurList;
		tempList.push(fournisseurObj);
		localStorage.setItem("fournisseurList", JSON.stringify(tempList));
		setFournisseurList(fournisseurList);
		setModal(false);

	}

	


	return (
		<>
		<body>
			<div className="content">		
				<div className='title'>
					<h1>Gestion de fournisseurs</h1>
				</div>
				<div>
					<button type="button" class="btn btn-primary" onClick={() => setModal(true)}>Ajouer un fournisseur</button>
				</div>

				<AddFournisseur modal = {modal} toggle = {toggle} save = {saveFournissuer}/>

				
				<div className='table-fournisseur'>
					{fournisseurList && fournisseurList.map((obj, index) => <FournisseurTable fournisseurObj = {obj} index = {index} />)}
				</div>
					
				
			</div>
		</body>
		</>	
	);
};

export default Fournisseur;