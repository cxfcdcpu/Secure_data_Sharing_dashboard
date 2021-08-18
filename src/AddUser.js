import { useRef } from 'react'

function AddUser() {
    const username = useRef(null);
    const password = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const attributes = useRef(null);

    const addUser = async (username, password, firstName, lastName, attributes) => {
        const requestOptions = {
            method: 'post',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: JSON.stringify({"username":username, "password":password, "firstname":firstName, "lastname":lastName, "attributes":[attributes]})
          };
        await fetch("http://localhost:8080/ReVo_webtest/AddUser", requestOptions)
        .catch(error => window.alert(error.message));
    };

    return (
        <div className="AddUser">
            <label>Add User</label><br/>
            <input ref={username} type="text" placeholder="Enter username" />
            <input ref={password} type="text" placeholder="Enter password" />
            <input ref={firstName} type="text" placeholder="Enter first name" />
            <input ref={lastName} type="text" placeholder="Enter last name" />
            <input ref={attributes} type="text" placeholder="Enter attributes" /><br/>
            <button onClick={() => addUser(username.current.value, password.current.value, firstName.current.value, lastName.current.value, attributes.current.value)}>Add User</button>
        </div>
    );
}

export default AddUser;
