import React from 'react';
import './index.css';


interface NavbarProps {
    onChange: (fieldName: string) => void;
}

export class Search extends React.Component<NavbarProps> {

    handleChange = (e: any) => {
        const fieldName = e.target.value;
        this.props.onChange(fieldName);
    }

    render() {

        return (
            <div className="container-search">
                <input
                    type="search"
                    placeholder="Pesquise um anime"
                    aria-label="Search"
                    onChange={this.handleChange.bind(this)}
                    />
            </div>
        )
    }
}