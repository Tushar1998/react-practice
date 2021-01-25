import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="flex relative bg-black text-white p-2 justify-between items-center">
			<Link to="/">
				<img className="w-auto h-16" src="/50001008.5332ba36.png" alt="" />
			</Link>
			<ul className="flex p-1 ali">
				<Link to="/users" className="m-3 hover:border-bottom-white">
					<li>Users</li>
				</Link>
				<Link to="/counter" className="m-3">
					<li>Counter</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navigation;
