import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { pageTitle } from '../utility/pageTitle';
const Login = () => {
	pageTitle( "Login" )
	const { login } = useContext( AuthContext )
	const location = useLocation();
	const navigate = useNavigate()
	const from = location.state?.from.pathname || "/"
	const handleLogin = ( e ) => {
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;


		if ( email && password ) {
			login( email, password )
				.then( result => {
					const user = result.user.email;
					if ( user ) {
						navigate( from, { replace: true } )
						toast.success( "Successfully Logged in" )
					}
				} )
				.catch( error => toast.error( "Email and password mismatched" ) )
		}
	}
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-[400px]">
						<div className="card-body">
							<form onSubmit={ handleLogin }>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="text" placeholder="email" className="input input-bordered" name='email' required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input type="password" placeholder="password" className="input input-bordered" name='password' required />
								</div>
								<div className="form-control mt-6">
									<input type="submit" className="btn btn-accent" value="Login" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;