import React from 'react';

const Blog = () => {
    return (
        <div class="overflow-x-auto">
            <div>
                <p className='text-xl text-amber-800'>How will you improve the performance of a React Application?</p>
                <p>Ans: React creates a virtual dom,for comparison prpose.This is known as diff algorithm.React uses the concept of a virtual DOM to minimize the performance. A state update in a parent component re-renders the parent and its child components.For ensuring re-rendering we need to keep component state local when necessary.If re-render happens  for no reason,the app gets slow,we can prevent this by memorizing react components."React.memo" is a higher-order component used to wrap a purely functional component to prevent re-rendering</p>
            </div>
            <div>
            <p className='text-xl text-amber-800'> What are the different ways to manage a state in a React application?</p>
            <p>Ans: There are four types react state we haver to manage.They are : Local state,Global state,Server state,URL state.Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Global state is data we manage across multiple components.Server data is the data that comes from an external server that must be integrated with our UI state.Tha URL state is data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div>
            <p className='text-xl text-amber-800'> How does prototypical inheritance work?</p>
            <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>   
            </div>
            <div>
            <p className='text-xl text-amber-800'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
            <p>Ans: We can use here the map method and then implement an if condition to find out the product which match with our required name.Also we can use the find method for implementing this operation.I this case we will get our expected product directly. </p> 
            </div>
            <div>
            <p className='text-xl text-amber-800'>What is a unit test? Why should write unit tests?</p>
            <p>Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.It is more convenient to break the total code into piece for checking purpose.Thus the work can be done fluently.This can be done by the unit test,where one can compare if the code works as the requirement or not. </p>
            </div>
        </div>
    );
};

export default Blog;