import React from 'react';

const FournisseurTable = ({fournisseurObj, index, deleteFournisseur}) => {

	const handleDelete = () => {
		deleteFournisseur(index);
	}

	

	return (
	
		
			<tbody>
				<tr>
					<th scope="row">{index}</th>
					<td>{fournisseurObj.Fournisseur}</td>
					<td>{fournisseurObj.NumeroTva}</td>
					<td>{fournisseurObj.Adresse}</td>
					<td>{fournisseurObj.Telephone}</td>
					<td>{fournisseurObj.Commentaire}</td>
					<td><button class="btn btn-success" >Modifier</button></td>
					<td><button class="btn btn-danger"  onClick = {handleDelete}>Supprimer</button></td>
					
				</tr>
			</tbody>
			
	
	);
};

export default FournisseurTable;