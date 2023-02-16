import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component{
    constructor(){
        super();
        // console.log("this is News constructor");
        this.state = {
            articles : [],
            loading : false,
            page : 1
            
        }
    }
    async componentDidMount(){
        // console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=974f1bf7815346e594a8907ac524fdcf&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
    }
    handlePrevClick = async() =>{
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=974f1bf7815346e594a8907ac524fdcf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({page: this.state.page-1,articles: parsedData.articles,loading:false})
    }
    handleNextClick = async() =>{
        console.log("next")
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/8))){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=974f1bf7815346e594a8907ac524fdcf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({page: this.state.page+1,articles: parsedData.articles,loading:false})
    }
    }

    render(){
        let {txtcolr,cardcolr} = this.props;
        return(
            <div className='container my-4'>
                <h2 className={`text-${txtcolr} text-center`}>NewsFox - Top Headlines of the Day</h2>

                {this.state.loading===true && <Spinner/>}

                <div className='row my-3'>
                {!this.state.loading && this.state.articles.map((element)=>{ 
                    return <div className="col md-4" key={element.url}>
                    <Newsitem key={element.url} title ={element.title.slice(0, 84)} description={element.description} imgurl={element.urlToImage} newsurl={element.url} cardcolr={cardcolr} txtcolr={txtcolr}/>
                    </div>
                })}  
                </div>

                <div className='container d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&laquo; Prev</button>
                    <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default  News