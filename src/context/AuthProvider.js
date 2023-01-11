import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth( app )

const AuthProvider = ( { children } ) => {
	const [user, setUser] = useState( [] );
	const [loading, setLoading] = useState( true );

	// login
	const login = ( email, password ) => {
		setLoading( true )
		return signInWithEmailAndPassword( auth, email, password )
	}
	//logout
	const logout = () => {
		setLoading( true )
		return signOut( auth )
	}
	// create user 
	const register = ( email, password ) => {
		setLoading( true )
		return createUserWithEmailAndPassword( auth, email, password )
	}
	// unmounting
	useEffect( () => {
		const unsubscribe = onAuthStateChanged( auth, currentUser => {
			setUser( currentUser );
			setLoading( false );

			return () => {
				return unsubscribe();
			}
		} )
	}, [] )

	const authInfo = {
		user,
		setUser,
		login,
		logout,
		loading,
		register
	}
	return (
		<div>
			<AuthContext.Provider value={ authInfo }>
				{ children }
			</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;