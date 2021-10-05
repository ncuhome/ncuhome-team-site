import React from 'react';
import { useHistory } from 'react-router';
import CompanyLogo from '@/assets/img/company-logo-s.svg';
import styles from './style.module.scss';

const About: React.FC = () => {
	const history = useHistory();

	return (
		<div className={styles.team_footer_wrapper}>
			<div className={styles.team_footer_top}>
				<p className={styles.team_footer_top_text1}>Ncu Homers </p>
				<p className={styles.team_footer_top_text2}> travel</p>
				<p className={styles.team_footer_top_text3}> around the world</p>
				<div className={styles.team_footer_top_img}>
					<img src={CompanyLogo} alt="company" />
				</div>
			</div>
			<div className={styles.team_footer_middle}>
				<p className={styles.team_footer_middle_text1}>
          Let's
					<br />
          make something
					<br />
					{' '}
          great together
				</p>
				<br />

				<div className={styles.team_footer_middle_btn}>
					<div onClick={() => history.push('/about')} className={styles.bold_btn}>Join us</div>
				</div>
				{/* {Bubbles} */}
			</div>
			<div className={styles.team_footer_bottom}>
				<ul className={styles.team_footer_list}>
					<li>
						<ul className={styles.team_footer_ul_about}>
							<li>
								<p>关注我们</p>
							</li>
							<li>
								<a href="#" className="wechat">
                  微信
								</a>
							</li>
							<li>
								<a
									className="zhihu"
									href="https://www.zhihu.com/people/nan-chang-da-xue-jia-yuan-gong-zuo-shi"
								>
                  知乎
								</a>
							</li>
							<li>
								<a className="bili" href="https://space.bilibili.com/444274979">
                  bilibili
								</a>
							</li>
						</ul>
					</li>
					<li>
						<ul className={styles.team_footer_ul_contact}>
							<li>
								<p>联系我们</p>
							</li>

							<li>
								<a className="address" title="地址：前湖校区学生公寓7栋0层">
                  地址：前湖校区学生公寓7栋0层
								</a>
							</li>
							<li>
								<a
									href="mailto:ncuadmin@163.com"
									title="邮箱：ncuadmin@163.com"
									className="mail"
								>
                  邮箱：ncuadmin@163.com
								</a>
							</li>
							<li>
								<a
									href="tel:0791_83969124"
									title="电话：0791_83969124"
									className="tel"
								>
                  电话：0791_83969124
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
