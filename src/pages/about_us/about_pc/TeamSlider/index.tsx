import Slider from 'react-slick';
import React, { useRef } from 'react';
import './style.scss';
import sliderArrow from '@/assets/img/team_banner_arrow.svg';
import TeamBG1 from '@/assets/img/teamBG1.svg';
import TeamBG2 from '@/assets/img/teamBG2.svg';
import TeamBG3 from '@/assets/img/teamBG3.svg';
import TeamBG4 from '@/assets/img/teamBG4.svg';
import TeamBG5 from '@/assets/img/teamBG5.svg';

const settings = {
	autoplay: true,
	// fade: true,
	infinite: true,
	autoplayspeed: 200,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const TeamSlider: React.FC = () => {
	const slierRef = useRef<Slider>(null);

	const goLastSlier = () => {
		slierRef.current?.slickNext();
	};

	const goNextSlider = () => {
		slierRef.current?.slickPrev();
	};

	return (
		<div className="slider-wrapper">
			<Slider {...settings} ref={slierRef}>
				<div className="team-slider-content">
					<img className="slider-img" src={TeamBG1} />
				</div>
				<div className="team-slider-content">
					<img className="slider-img" src={TeamBG2} />
				</div>
				<div className="team-slider-content">
					<img className="slider-img" src={TeamBG3} />
				</div>
				<div className="team-slider-content">
					<img className="slider-img" src={TeamBG4} />
				</div>
				<div className="team-slider-content">
					<img className="slider-img" src={TeamBG5} />
				</div>
			</Slider>
			<img
				src={sliderArrow}
				className="slider-arrow slider-left-arrow"
				alt="上一页"
				onClick={goLastSlier}
			/>
			<img
				src={sliderArrow}
				className="slider-arrow slider-right-arrow"
				alt="下一页"
				onClick={goNextSlider}
			/>
		</div>
	);
};

export default TeamSlider;
