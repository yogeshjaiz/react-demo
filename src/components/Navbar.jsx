import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar-{totalCounters}
      </a>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar {this.props.totalCounters}
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;
