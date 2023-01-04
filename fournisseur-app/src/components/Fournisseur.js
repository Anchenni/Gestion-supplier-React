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

	const deleteFournisseur = (index) =>{
		let tempList = fournisseurList;
		tempList.splice(index, 1);
		localStorage.setItem("fournisseurList", JSON.stringify(tempList));
		setFournisseurList(tempList);
		window.location.reload();
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
		
			<table class="table table-striped ">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Fournisseur</th>
					<th scope="col">N° de TVA</th>
					<th scope="col">Adresse</th>
					<th scope="col">Teléphone</th>
					<th scope="col">Commentaire</th>
					<th scope="col">Modifier</th>
					<th scope="col">Supprimer</th>
				</tr>
			</thead>
				
				
					{fournisseurList && fournisseurList.map((obj, index) => <FournisseurTable fournisseurObj = {obj} index = {index} deleteFournisseur = {deleteFournisseur} />)}
					</table>
		
				</div>
					
				
			</div>
		</body>
		</>	
	);
};

export default Fournisseur;