import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

export default function DisplayStatus() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        console.log(response.data);
        setTickets(response.data.tickets);        
        // console.log(tickets);        
      });
  }, [tickets]);

  return (
    <div className="statusContainer">
      <div className="statusContain">
        <h4 style={{ paddingLeft: "15px" }}>Todo</h4>
        {tickets.map((element) => {
          return element.status === "Todo" ? (
            <Cards title={element.title} id={element.id} tag={element.tag} />
          ) : null;          
        })}
      </div>
      <div className="statusContain">
        <h4 style={{ paddingLeft: "15px" }}>In Progress</h4>
        {tickets.map((element) => {
          return element.status === "In progress" ? (
            <Cards title={element.title} id={element.id} tag={element.tag} />
          ) : null;          
        })}
      </div>
      <div className="statusContain">
        <h4 style={{ paddingLeft: "15px" }}>Done</h4>
        {tickets.map((element) => {
          return element.status === "Done" ? (
            <Cards title={element.title} id={element.id} tag={element.tag} />
          ) : null;          
        })}
      </div>
      <div className="statusContain">
        <h4 style={{paddingLeft: "15px" }}>Backlog</h4>
        {tickets.map((element) => {
          return element.status === "Backlog" ? (
            <Cards title={element.title} id={element.id} tag={element.tag} />
          ) : null;          
        })}
      </div>
      <div className="statusContain">
        <h4 style={{ paddingLeft: "15px" }}>Cancelled</h4>
        {tickets.map((element) => {
          return element.status === "Cancelled" ? (
            <Cards title={element.title} id={element.id} tag={element.tag} />
          ) : null;          
        })}
      </div>
    </div>
  );
}
