import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from './style.module.scss';
import TeamAct from './TeamAct';
import TeamSlider from './TeamSlider';
import TeamFooter from './TeamFooter';
import ArrowLeft from '@/assets/img/arrow-left.png';
import ArrowRight from '@/assets/img/arrow-right.png';
import team_play from '@/assets/img/team-act-play.svg';
import team_share from '@/assets/img/team-act-share.svg';
import downHandle from '@/assets/img/down-handle.png';

const TeamSmall: React.FC = () => {
	const settings = {
		arrows: false,
		adaptiveHeight: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const sliderRef: any = useRef();

	return (
		<div>
			<div className={styles.team_wrapper}>
				<div className={styles.team_slider_wrapper}>
					<TeamSlider />
				</div>
				<div className={styles.team_content_rectangle}><img style={{ width: '25px' }} src={downHandle} /></div>
				<div className={styles.team_content_wrapper}>
					<div className={styles.team_content_actcard}>
						<img src={team_play} />
						<div className={styles.actcard_title}>
              To do Things
						</div>
						<div className={styles.actcard_desc}>
              创意输出、设计呈现、开发测试、运营推广······我们一步一步摸索，以力求完美的精神，不甘平庸的态度，实现产品的从0到1···
						</div>
					</div>
					<div className={styles.team_content_actcard}>
						<img src={team_share} />
						<div className={styles.actcard_title}>
              Share Us
						</div>
						<div className={styles.actcard_desc}>
              每一届都有优秀的家园人返回家园为后辈们做分享，不论是经验分享，还是技术传授，皆是一场新奇交流，此外，家园还提供各组培训和大量书籍帮助家园人不断提升。
						</div>
					</div>
				</div>
			</div>
			<div className={styles.team_content_actcard_rectangle}>
				<img style={{ width: '25px', marginTop: '20px' }} src={downHandle} />

			</div>
			<div
				style={{
					padding: '20px',
					height: '400px',
					backgroundColor: '#f4f4f5',
				}}
				className={styles.c_wrapper}
			>
				<p style={{
					marginTop: '-40px', marginRight: '35%', marginBottom: '5%', fontSize: '35px', letterSpacing: '5px',
				}}
				>
          ACTIVITY
				</p>
				<div style={{
					width: '90%',
				}}
				>
					<Slider ref={sliderRef} {...settings}>
						<TeamAct
							imgName="https://incu-orbit.ncuos.com/18.jpg"
							ActTitle_EN="CELEBRATION"
							ActTitle_CN="周年庆"
							ActTime="2020.5.23"
							ActDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去r s
展望未来的初心与决心。"
						/>
						<TeamAct
							imgName="https://incu-orbit.ncuos.com/18.jpg"
							ActTitle_EN="CELEBRATION"
							ActTitle_CN="周年庆"
							ActTime="2020.5.23"
							ActDes="
家园工作室成年的庆典
是庆祝，是狂欢
更是回首过去
展望未来的初心与决心。"
						/>

					</Slider>
				</div>
				<div style={{ marginBottom: '5%' }}>
					<img onClick={() => sliderRef.current.slickPrev()} style={{ width: '30px', marginLeft: '100px' }} src={ArrowLeft} />
					<img onClick={() => sliderRef.current.slickNext()} style={{ width: '30px', marginLeft: '60px' }} src={ArrowRight} />
				</div>
			</div>
			<div className={styles.team_footer_wrapper}>
				<TeamFooter />
			</div>
		</div>
	);
};

export default TeamSmall;
