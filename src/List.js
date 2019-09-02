import React from 'react';

class List extends React.Component {

    render () {
        const {rank ,name} = this.props;
        return (
            <li >{rank} : {name}</li>
        );
    }
}

export default List;