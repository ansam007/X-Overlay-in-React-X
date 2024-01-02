import Card from '../UI/Card';
import classes from './AddUser.module.css'
import {useState} from 'react';

const AddUser = (props) => {
    const[enterUserName, setEnterUserName] = useState('');
    const[enterAge, setEnterAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enterUserName.trim().length === 0 || enterAge.trim().length === 0){
            return;
        }

        if(enterAge < 1){
            return;
        }

        props.onAddUser(enterUserName, enterAge);


        setEnterUserName('');
        setEnterAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnterUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnterAge(event.target.value);
    }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" value={enterUserName} type="text" onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={enterAge} type="number" onChange={ageChangeHandler}></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
