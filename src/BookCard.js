import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div>
      
     <h5>{book.volumeInfo.title}</h5>
  <img src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}/>
        <h2>Title</h2>
 <p> "Any data analytics solution requires data population and preparation. <br></br>With the rise of data analytics solutions these years,<br /> the need for this data preparation becomes even more essential.<br></br> Power BI is a helpful data analytics tool that is used worldwide by many users.<br /> As a Power BI (or Microsoft BI) developer, <br />it is essential to learn<br /> how to prepare the data in the right shape and format needed. <br></br>You need to learn how to clean the data <br />and build it in a structure that can be modeled easily and used high performant for visualization. <br></br>Data preparation and transformation is the backend work.</p>
 
    {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
  {/* </div> */}
</div>
    //  </div>
  );
};

export default BookCard;
