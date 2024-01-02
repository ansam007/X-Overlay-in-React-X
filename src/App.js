import UserList from './components/Users/UserList';
import AddUser from './components/Users/AddUser';
import {useState} from 'react';

function App() {
    const [userList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUserList)=>{
            return[...prevUserList, {name: uName, age: uAge, id:Math.random().toString()}]
        });
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UserList users={userList}></UserList>
        </div>
    )
}

export default App;

