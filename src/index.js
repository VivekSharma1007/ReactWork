import React, { Children } from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Listofbooks() {
  return (
    <section className="AllComp">
      

     
      {/* <Book
        imgurl={firstBook.imgurl}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        imgurl={secondBook.imgurl}
        title={secondBook.title}
        author={secondBook.author}
      /> */}
    <Booklist />

      
    </section>
  );
}

const arr = [
{
  id: 1,
  imgurl:
    "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL906_SR906,600_.jpg",
  title: "Atomic",
  author: "Vivek Sharma",
  commentkaex: "this is available only in this",
},

{
  id : 2,
  imgurl:
    "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg",
  title: "Psychology of Money",
  author: "Morgan Housel",
}

];



const Booklist = () => {
  return (
    <section className="bookList">
      {

        arr.map((book) => {
          const { imgurl, title, author } = book;
          
          return (
            
            <Book key={book.id} {...book}></Book> 
          );
        })

      }
    </section>
  );
};


const Book = (props) => {
  function clickSimple() {
    console.log("clicked");
  }
  function clickTogetTarget(e) 
  {
    console.log(e.target);
    console.log(e);
  }
  const parameterFunction = (author) => {
    console.log(author);
  }
  const { imgurl, title, author } = props     
  return (
    <div>
      <img src={imgurl} />
      <p onClick={clickSimple}>{title}</p> {/* simple ex */}
      {/* <p onClick={clickTogetTarget}>{author}</p> */}
      <p onClick={ () => {console.log(title);}}>{author}</p>  {/* in line function call */ }
      
      {/* in below case if we are passing the parameters then on loading the site the work is already done before the event occur */}
      {/* <p onClick={parameterFunction(author)}>{author}</p>  */}

      
      {/* to get the solution of above problem we need to create an inline fuction for it then pass the parameter */}
      <p onClick={() => parameterFunction(author)}>{author}</p>
    </div>

  );
}






ReactDOM.render(<Listofbooks />, document.getElementById("root"));






// *********************** map array


// const names = ["abc", "edf", "fghii"];
// const newName = names.map((name) => {
//   return <h1>{name}</h1>
// });

// const Booklist = () => {
//   return (
//     <section className="bookList">
//       {newName}
//     </section>
//   );
// };













// ************************  map the array
// const Booklist = () => {
//   return (
//     <section className="bookList">
//       {
        
//           arr.map((book) => {
//             return 'hello';
//           })
      
//       }
//     </section>
//   );
// };














// send the value in props.book

// const Booklist = () => {
//   return (
//     <section className="bookList">
//       {

//         arr.map((book) => {
//           const { imgurl, title, author } = book;
//           // console.log(book);  object of book
//           return (
//             // <Book imgurl={imgurl} title={title}></Book>
//             <Book bbbbook={book}></Book> // we are sending the book as book props
//           );
//         })

//       }
//     </section>
//   );
// };


// const Book = (props) => {
//   const { imgurl, title, author } = props.bbbbook; // so it is here the props of book not only props
//   return (
//     <div>
//       <img src={imgurl} />
//       <p>{title}</p>
//       <p>{author}</p>
//     </div>

//   );
// }










// spread operator and key props 
// // first give every object in array a unique id 
// // then pass that id value 
// const Booklist = () => {
//   return (
//     <section className="bookList">
//       {

//         arr.map((book) => {
//           const { imgurl, title, author } = book;
          
//           return (
            
//             <Book key={book.id} {...book}></Book> // id in key and spread operator for book
//           );
//         })

//       }
//     </section>
//   );
// };


// const Book = (props) => {
//   const { imgurl, title, author } = props     // using spread operator we dont need to use props.book
//   return (
//     <div>
//       <img src={imgurl} />
//       <p>{title}</p>
//       <p>{author}</p>
//     </div>

//   );
// }




