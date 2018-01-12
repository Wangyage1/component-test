import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import Lang from '../../i18n/index';

class ConfirmModal extends PureComponent{

	render() {
		const {visible, handleCancel, handleConfirm, afterClose,
			title, message, cancelBtnText, confirmBtnText,
			hideCancelBtn, hideConfirmBtn, showHeader, width, isFooter, closable} = this.props;

		const footer = isFooter ? <div className="footer">
			{hideCancelBtn ? null : <span className="btn" onClick={handleCancel}>{cancelBtnText ? cancelBtnText : Lang.cancel}</span>}
			{hideConfirmBtn ? null : <span className="btn" onClick={handleConfirm}>{confirmBtnText ? confirmBtnText : Lang.sure}</span>}
		</div> : null;
		return <Modal title={showHeader ? (title ? title : Lang.remind) : null} closable={closable} visible={visible} footer={footer}
				wrapClassName="sw-confirm-modal" width={width}
				afterClose={afterClose ? afterClose : () => {}}
				onCancel={handleCancel}
				onOk={handleConfirm}
				>
				{message && <p className="content-text">{message}</p>}
				<div className="content-text">
					{React.cloneElement(this.props.children || <div/>)}					
				</div>
		</Modal>
	}

}

export default ConfirmModal;