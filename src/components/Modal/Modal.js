import React, { useContext } from 'react';
import { HomeContentContext } from '../../App';
import { toast } from 'react-hot-toast';

const Modal = () => {
	const { open, setOpen } = useContext( HomeContentContext )
	const handleSubscribe = ( e ) => {
		e.preventDefault();
		const name = e.target.name.value;
		const phone = e.target.phone.value;
		const user = { name, phone }
		console.log( user )
		fetch( `${ process.env.REACT_APP_HOST }/subscriber`, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify( user )
		} ).then( res => res.json() )
			.then( data => {
				toast.success( "Successfully submitted" )
			} ).catch( error => console.log( error ) )

		setOpen( !open )
	}
	return (
		<div>
			{/* Put this part before </body> tag */ }
			<input type="checkbox" id="explore" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Newsletter</h3>
					<form onSubmit={ handleSubscribe }>
						<div className="form-control mt-4">
							<input type="text" name="name" placeholder='Your Name' className='input input-bordered input-primary w-full mb-4' required />

						</div>
						<div className="form-control">
							<input type="text" name="phone" placeholder='Your phone number' className='input input-bordered input-primary w-full' required />
						</div>
						<div className="modal-action">
							<label htmlFor="explore" className="btn text-black font-bold bg-[#b8b7b7] border-none  hover:bg-[#a5a2a2] duration-500">Close</label>
							<input type="submit" value="Subscribe" className='btn text-white font-bold bg-[#0A1806] border-none  hover:bg-[#13300a] duration-500' />
						</div>
					</form>

				</div>
			</div>
		</div>
	);
};

export default Modal;