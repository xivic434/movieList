import React from 'react';

class List extends React.Component {

    render () {
        const {item} = this.props;
        const openDt = item.hasOwnProperty("openDt") ? item.openDt : 0;
        const rank = item.hasOwnProperty("rank") ? item.rank : 0;
        const movieNm = item.hasOwnProperty("movieNm") ? item.movieNm : 0;
        const salesAmt = item.hasOwnProperty("salesAmt") ? item.salesAmt : 0;
        const salesInten = item.hasOwnProperty("salesInten") ? item.salesInten : 0;
        const audiAcc = item.hasOwnProperty("audiAcc") ? item.audiAcc : 0;
        
        return (
            <li >
                <p> 순위 : {rank}</p>
                <p> 제목 : {movieNm}</p>
                <p> 매출액 증감분 : {salesInten}</p>
                <p> 매출액 : {salesAmt}</p>
                <p> 개봉일 : {openDt}</p>
                <p> 누적관객수 : {audiAcc}</p>
            </li>
        );
    }
}

export default List;