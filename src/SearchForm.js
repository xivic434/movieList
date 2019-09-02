import React from 'react';
import List from "./List";
class SearchForm extends React.Component {

    state = {
        searchDate : "",
    }

    handleSubmit = (e) => {
        console.log("handleSubmit");
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            date : ""
        });
    }

    handelOnChange = (e)=> {
        console.log(e.target.name, e.target.value );
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const {searchDate } = this.state; 
        const {movies , isLoading} = this.props;
        return (
            <form onSubmit={this.handleSubmit} >
                <input placeholder='yyyymmdd' name="searchDate" value={this.searchDate} onChange={this.handelOnChange} />
                <button type="submit" >검색</button>
                <div>
                {
                    isLoading ?
                        'Loding...'
                        : (movies && movies.map((item, i ) => {
                            return (
                                <List key={i+1}
                                    rank={item.rank}
                                    name={item.movieNm} />
                            );
                        }))
                }
                </div>
            </form>

        );
    }
}

export default SearchForm;