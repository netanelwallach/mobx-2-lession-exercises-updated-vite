import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";
import Reservation from "./Reservation";

class Restaurant extends Component {
  addReservation = () => {
    const { GeneralStore, RestaurantStore } = this.props;
    RestaurantStore.addRes(GeneralStore.name, GeneralStore.numPeople);
  };
  render() {
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        {/* Add in # of people in restaurant */}
        <div>You have {this.props.RestaurantStore.restPopulation} people </div>
        {/* Add in # of completed tables with id "completedTables*/}
        <div id="completedTables">
          You have {this.props.RestaurantStore.completedTables} completed tables
        </div>
        <ResInput />
        <button id="addRes" onClick={this.addReservation}>
          Add Reservation
        </button>
        {/* Make the Add Reservation button work */}

        <div className="reservations">
          {/* Map reservation data to Reservation components here */}
          {this.props.RestaurantStore.reservations.map((res) => (
            <Reservation key={res.id} res={res} />
          ))}
        </div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
