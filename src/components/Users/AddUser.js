import Card from '../UI/Card';
import classes from './AddUser.module.css'
import {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const[enterUserName, setEnterUserName] = useState('');
    const[enterAge, setEnterAge] = useState('');
    const[error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enterUserName.trim().length === 0 || enterAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;  
        }  

        if(enterAge < 1){
            setError({
                title:'Invalid age',
                message: 'Please enter valid age'   
            })
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

    const errorHandler = () => {
        setError(null);
    }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" value={enterUserName} type="text" onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={enterAge} type="number" onChange={ageChangeHandler}></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
