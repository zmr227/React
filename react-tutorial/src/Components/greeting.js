import React, {Component} from "react";
import ReactDOM from "react-dom";

export function Greeting() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    const styles = {
    backgroundColor: "FF2D00",
    fontSize: 24
    }

    if (hours < 12){
        timeOfDay = "morning";
        styles.color = "#045623";
    } else if (hours >= 12 && hours < 18){
        timeOfDay = "afternoon";
        styles.color = "#FF5D2A";
    } else {
        timeOfDay = "night";
        styles.color = "#343A2F";
    }


    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}