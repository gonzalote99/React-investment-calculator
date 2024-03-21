import {useState} from 'react';
import classes from './Userinput.module.css';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
  
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput)
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    console.log('reset');
  };

  const inputChangeHandler = (input, value ) => {
    setUserInput((prevInput) => {
      return{
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return(
    <form onSubmit={submitHandler} className={classes.form} >
    <div className={classes['input-group']}>
    <p>
    <label htmlFor='current-savings'>current savings($)</label>
      <input
        onChange={(event) => inputChangeHandler('current-savings', event.target.value) }
        value={userInput['current-savings']}
        type='number'
        id='current-savings'
        />
    </p>
       <p>
        <label htmlFor='yearly-contribution'>yearly savings($)</label>
          <input
            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value) }
            value={userInput['yearly-contribution']}
            type='number'
            id='yearly-contribution'
            />
        </p>
    </div>
      <div className={classes['input-group']}>
         <p>
          <label htmlFor='expected-return'>expected interest($, per year)</label>
            <input
              onChange={(event) => inputChangeHandler('expected-return', event.target.value) }
              value={userInput['expected-return']}
              type='number'
              id='expected-return'
              />
          </p>
         <p>
          <label htmlFor='duration'>investement duration (years)</label>
            <input
              onChange={(event) => inputChangeHandler('duration', event.target.value) }
              value={userInput['duration']}
              type='number'
              id='duration'
              />
          </p>
      </div>
      <p className={classes.actions}>
      <button onClick={resetHandler} type='reset' >reset</button>
        <button type='submit' className={classes.button} >calculate</button>
      </p>
    </form>
  );
};

export default UserInput;

