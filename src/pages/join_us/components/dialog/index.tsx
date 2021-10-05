import React, { useEffect, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import './style.scss';

interface DialogData {
  onOk: MouseEventHandler<HTMLDivElement>;
}

const Dialog: React.FC<DialogData> = (props) => {
	const pageNode: HTMLElement = document.createElement('div');
	document.body.appendChild(pageNode);
	useEffect(() => () => {
		document.body.removeChild(pageNode);
	}, []);

	return createPortal(
		(<div className="full_screen">
			<div className="dialog_box">
				<div className="dialog_box_descrpition">
					<p>老生报名请直接将简历（可添加作品集）发送至:</p>
					<p style={{ color: '#1B8FF4' }}>hr@ncuhome.cn</p>
					<p> 文件名格式: 【南大家园 + 岗位】年级-姓名 </p>
				</div>
				<div className="dialog_box_button" onClick={props.onOk}><p>确定</p></div>
			</div>
		</div>),
		pageNode,
	);
};

export default Dialog;
