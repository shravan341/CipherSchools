import React from 'react';

const AddTask = () => {
    return (
        <>
        <h3 className="ui heading center "> Add New Task</h3>
            <h3>Add a New Task</h3>
            <div className="ui form">
                <form>
                    <div className="field">
                        <label htmlFor="userInput">Title</label>
                        <input type="text" id="userInput" name="title" placeholder="Enter user input" 
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="shortText">Description</label>
                        <textarea id="shortText" name="description" rows="2" placeholder="Enter short text">
                            
                        </textarea>
                    </div>
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddTask;
