import React, { useContext, useState } from 'react';
import Banner from '../components/Banner/Banner';
import Explore from '../components/Explore/Explore';
import Modal from '../components/Modal/Modal';
import { HomeContentContext } from '../App';
import { pageTitle } from '../utility/pageTitle';

const Home = () => {
	const { open } = useContext( HomeContentContext )
	pageTitle( "Home" )
	return (
		<div>
			<Banner></Banner>
			<Explore></Explore>
			{
				open && <Modal></Modal>
			}
		</div>
	);
};

export default Home;