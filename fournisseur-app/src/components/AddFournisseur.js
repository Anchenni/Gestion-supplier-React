import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const AddFournisseur = ({modal, toggle, save}) => {
	const [fournisseurName, setFournisseurName] = useState("");
	const [numeroTva, setNumeroTva] = useState("");
	const [adresse, setAdresse] = useState("");
	const [telephone, setTelephone] = useState("");
	const [commentaire, setCommentaire] = useState("");
	

	const handleChange = (e) => {
		const {name, value} = e.target;

		if (name === "fournisseurName"){
			setFournisseurName(value);
		} else if (name ==="numeroTva"){
			setNumeroTva(value);
		}else if (name ==="adresse"){
			setAdresse(value);
		}else if (name ==="telephone"){
			setTelephone(value);
		}else if (name ==="commentaire"){
			setCommentaire(value);
		};

	};

	const saveFournissuer = (e) => {
		e.preventDefault();
		let fournisseurObj = {};
		fournisseurObj["Fournisseur"] = fournisseurName;
		fournisseurObj["NumeroTva"] = numeroTva;
		fournisseurObj["Adresse"] = adresse;
		fournisseurObj["Telephone"] = telephone;
		fournisseurObj["Commentaire"] = commentaire;
		save(fournisseurObj);
	}

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}><u>Fournisseur</u></ModalHeader>
				<ModalBody>
			<form>
			<div className='form-group' >
							<label >Nom de fournisseur</label>
							<input type="text" className= "form-control" value = {fournisseurName} onChange = {handleChange} name = "fournisseurName"/>
						</div>
						<div className='form-group'>
							<label>N° de TVA</label>
							<input type="text" className= "form-control" value = {numeroTva} onChange = {handleChange} name = "numeroTva"/>
						</div>
						<div className='form-group'>
							<label>Adresse</label>
							<input type="text" className= "form-control" value = {adresse} onChange = {handleChange} name = "adresse"/>
						</div>
						<div className='form-group'>
							<label>Teléphone</label>
							<input type="text" className= "form-control" value = {telephone} onChange = {handleChange} name = "telephone"/>
						</div>
						<div className='form-group'>
							<label>Commentaire</label>
							
							<textarea row = "6" className='form-control' value = {commentaire} onChange = {handleChange} name = "commentaire"></textarea>

						</div>
			</form>
			</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={saveFournissuer}>
						Enregistrer
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Annuler
					</Button>
				</ModalFooter>
      		</Modal>
		</div>
	);
};

export default AddFournisseur;