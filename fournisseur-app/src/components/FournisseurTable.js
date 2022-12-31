import React from 'react';

const FournisseurTable = ({fournisseurObj, index}) => {



	return (
	
		<table>
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
			<tbody>
				<tr>
					<th scope="row">{index}</th>
					<td>{fournisseurObj.Fournisseur}</td>
					<td>{fournisseurObj.NumeroTva}</td>
					<td>{fournisseurObj.Adresse}</td>
					<td>{fournisseurObj.Telephone}</td>
					<td>{fournisseurObj.Commentaire}</td>
					<td><button class="btn btn-success">Modifier</button></td>
					<td><button class="btn btn-danger">Supprimer</button></td>
					
				</tr>
			</tbody>
			</table>
		</table>
	
	);
};

export default FournisseurTable;