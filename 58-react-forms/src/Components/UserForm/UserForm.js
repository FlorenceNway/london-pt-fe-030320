import React, { useState} from "react";

const UserForm = () => {
    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        gender: ""
    })

    const handleUserForm = (event) => {
       setUser({
           ...user,
           [event.target.name]:  event.target.type === "number"
           ? parseInt(event.target.value)
           : event.target.value,
         });
    }

    const postUser = async(newUser) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(newUser)
        };
        return fetch("http://localhost:3001/users", configObj)
        .then((response) => {
            if(response.ok) {
                console.log('ok')
                return response.json()
            }else {
                throw "Oops something went wrong!"
            }
        })
        .catch(error => error)
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      const { firstName, lastName, age, gender} = user;
       
      firstName && lastName && age && gender && postUser(user);
        
       setUser({
           firstName: "",

           lastName: "",
           age: 0,
           gender: ""
       });
     };

    return (
        <div className='state'>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           className = "firstName"
           name="firstName"
           value={user.firstName}
           placeholder="First name..."
           onChange={handleUserForm}
         />
          <input
           type="text"
           name="lastName"
           className = "lastName"
           value={user.lastName}
           placeholder="Last name..."
           onChange={handleUserForm}
         />
         <input
           type="number"
           className = "age"
           name="age"
           value={user.age}
           placeholder="Type age..."
           onChange={handleUserForm}
         />
         <select
          type="select"
          className="gender"
          name="gender"
          value={user.gender}
          onChange={handleUserForm}
        >
          <option>Choose Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit" onSubmit={handleUserForm}>
          Submit
        </button>
       </form>
       </div>
     );
};

export default UserForm;
