// import React from 'react';
// import RatingComponent from '@cogent-labs/react-rating-component';

// class Rating extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       rating: 1
//     };
//   }

//   onStarClick(nextValue, prevValue, name) {
//     this.setState({rating: nextValue});
   
//     console.log(nextValue);
//   }

//   render() {
//     const { rating } = this.state;
//     console.log(rating);
//     return (
//       <div>
       
//         <RatingComponent
//           name="rate1"
//           starCount={5}
//           value={rating}
//           onStarClick={this.onStarClick.bind(this)}
//         />
//       </div>
//     );
//   }
// }



// export default Rating;