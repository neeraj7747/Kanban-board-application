import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

export default function Display(props) {
  const [articles, setArticles] = useState([]);
  //const [loading, setLoading] = useState(true);
  //   const [article0, setArticle0] = useState([]);
  //   const [article1, setArticle1] = useState([]);
  //   const [article2, setArticle2] = useState([]);
  //   const [article3, setArticle3] = useState([]);
  //   const [article4, setArticle4] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
        //setLoading(true)
      )
      .then((response) => {
        // console.data(response.data)
        setArticles(response.data.tickets);
        //setLoading(false);        
      });      
  }, []);

  return (
    <div className="container">
      <div className="contain">
        <h4 style={{paddingLeft:'25px' }}> ... URGENT</h4>
        {articles.map((element) => {
          return element.priority === 4 ? (
            <Cards title={element.title} id={element.id} tag={element.tag} check={props.check} toggleCheck={props.toggleCheck}/>
          ) : null;
        })}
      </div>
      <div className="contain">
        <h4 style={{paddingLeft:'25px' }}>... High Priority</h4>
        {articles.map((element) => {
          return element.priority === 3 ? (
            <Cards title={element.title} id={element.id} tag={element.tag} check={props.check} toggleCheck={props.toggleCheck}/>
          ) : null;
        })}
      </div>
      <div className="contain">
        <h4 style={{paddingLeft:'25px' }}>... Medium Priority</h4>
        {articles.map((element) => {
          return element.priority === 2 ? (
            <Cards title={element.title} id={element.id} tag={element.tag} check={props.check} toggleCheck={props.toggleCheck}/>
          ) : null;
        })}
      </div>
      <div className="contain">
          <h4 style={{paddingLeft:'25px' }}>... Low Priority {}</h4>
        {articles.map((element) => {
            return element.priority === 1 ? (
            <Cards title={element.title} id={element.id} tag={element.tag} check={props.check} toggleCheck={props.toggleCheck}/>
          ) : null;
        })}
      </div>
      <div className="contain">
        <h4 style={{paddingLeft:'25px' }}>... No Priority</h4>
        {articles.map((element) => {
          return element.priority === 0 ? (
            <Cards title={element.title} id={element.id} tag={element.tag} check={props.check} toggleCheck={props.toggleCheck}/>
          ) : null;
        })}
      </div>
    </div>
  );
}
