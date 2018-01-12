import React, { Component } from 'react';
import { Radio } from 'antd';
import { map } from 'lodash';
import  './common.less';

const RadioButtonItem = Radio.Button;
const RadioGroup = Radio.Group;
//我就是来试着编辑一下玩玩
class RadioButton extends Component {
	render() {
		const { btns, size = 'default', activeButton, handleChange } = this.props;
		return (
			<RadioGroup defaultValue={activeButton} onChange={handleChange}>
				{
					map(btns, (item) => {
						return <RadioButtonItem key={item.key}
							styleName={'radio-button radio-button-' + size}
							value={item.value} >{item.text}</RadioButtonItem>
					})
				}
	        </RadioGroup>
		)
	}
}

export default RadioButton;