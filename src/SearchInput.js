import React, { PureComponent } from 'react';
import Icon from './Icon';
import {Input} from 'antd';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        this.inputValue = '';

        this.onChange = this.onChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    onChange(e) {
        const value = e.target.value ? e.target.value.trim() : '';
        this.inputValue = value;

        if(!value){
            this.handleSearch();
        }
    }
    
    handleSearch() {
        const {onSearch} = this.props;
        onSearch && onSearch(this.inputValue);
    }

    render() {
        const { defaultValue, placeholder, error = false, style = {} } = this.props;
        return (
            <div className={`common-search-input ${error ? 'error' : ''}`} style={style}>
                <Input
                    defaultValue={defaultValue}
                    onChange={this.onChange}
                    onPressEnter={this.handleSearch}
                    placeholder={placeholder}
                />
                <Icon name="search" onClick={this.handleSearch} />
            </div>
        );
    }
}

export default SearchInput;
