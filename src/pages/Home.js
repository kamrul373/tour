import React, { useContext, useState } from 'react';
import Banner from '../components/Banner/Banner';
import Explore from '../components/Explore/Explore';
import Modal from '../components/Modal/Modal';
import { HomeContentContext } from '../App';

const Home = () => {
	const { open } = useContext( HomeContentContext )
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