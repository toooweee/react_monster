import React from "react";
import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <div>
      <User
        img={"https://avatars.githubusercontent.com/u/143972095?v=4"}
        name="islam"
        age={22}
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
      <Person name={"islam"} age={18} />
      <Product name={"horny alt girl"} price={"free"} />
      <Card>
        <p>Hello</p>
        <h4>From card children i am</h4>
      </Card>
    </div>
  );
};

const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt="avatar" />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Married: {isMarried ? "Yes" : "No"}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default App;
