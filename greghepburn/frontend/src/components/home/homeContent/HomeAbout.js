import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeAbout extends Component {
	
	render() {

		return (
			<section id="section-a" className="grid">
				<div className="content-wrap">
					<div className="content-text">
						<p className="heavy-message">Hi!  My name is Greg Hepburn and I am a self-taught Python Developer.</p>
						<p className="heavy-message">
							I fell in love with codeing because it continuously challenges me.  The feeling of tackleing a difficult problem, and finding success is addictive.  
							I enjoy being able to push myself, and to see improvments in my abillity.
						</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout
