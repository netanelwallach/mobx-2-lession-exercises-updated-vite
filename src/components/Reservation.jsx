import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Reservation extends Component {
  seatReservation = () => {
    const { RestaurantStore, res } = this.props;
    RestaurantStore.seatRes(res.id);
  };

  completeReservation = () => {
    const { RestaurantStore, res } = this.props;
    RestaurantStore.completeRes(res.id);
  };

  render() {
    //render the reservation data here
    //make sure you store the ID somewhere so you can find the reservation
    //use the class "conditional" to conditionally render completed reservations
    //You should have a complete reservation button to complete the reservation
    const { res } = this.props;
    return (
      <div className={res.completed ? "conditional" : ""}>
        <span>
          {res.name} ({res.numPeople} people) are {res.seated ? " " : "not "}
          Seated
        </span>
        <button onClick={this.seatReservation}>Seat Reservation</button>
        <button onClick={this.completeReservation}>Complete Reservation</button>
      </div>
    );
  }
}

//inject your store here
// export default Reservation;
export default inject("RestaurantStore")(observer(Reservation));
