import React from 'react';
import axios from 'axios';
import SearchForm from "./SearchForm";
class App extends React.Component {

    state = {
        isLoading: false,
        date: "",
        movies : []
    };

    getData = async (state) => {
        await axios.get(
            'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8512edd89b714bf2cf35fcb50adac48d&',
            {
                params: {
                    targetDt: state.date
                }
            }
        ).then (res =>{
            if (res.status === 200 && res.data.hasOwnProperty("boxOfficeResult")) {
                const boxOfficeResult = res.data.boxOfficeResult;
                const dailyBoxOfficeList = boxOfficeResult.dailyBoxOfficeList ? boxOfficeResult.dailyBoxOfficeList : [];
                this.setState({ isLoading: false ,movies : dailyBoxOfficeList });
            }
        })
    };

    componentWillUpdate(props, state) {
        if(state.isLoading){
            this.getData(state);
        }
    }

    searchMovie = (state) => {
        this.setState({
            date: state.searchDate,
            isLoading: true,
            movies: [] 
        });
    }

    render() {
        const {isLoading , movies} = this.state;
        return (
            <SearchForm onCreate={this.searchMovie} movies={movies} isLoading={isLoading}/>
        );
    }
}

export default App;
