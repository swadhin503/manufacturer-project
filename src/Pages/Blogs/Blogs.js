import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-base-200">
            <h1 className="text-center font-bold text-accent py-8 text-5xl ">Read Some Blogs</h1>
            
                <div class="card bg-base-200 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-5 my-4
                ">
                     <div class="card-body bg-base-100">
                        <h2 class="card-title text-primary text-3xl">How will you improve the performance of a React Application?</h2>
                        <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.</p>
                    </div>

                     <div class="card-body bg-base-100">
                        <h2 class="card-title text-primary text-3xl">What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main types of state you need to properly manage in your React apps:
                            <ol>
                                <li>1. Local state.</li>
                                <li>2. 
                                Global state.</li>
                                <li>3. 
                                Server state.</li>
                                <li>4. URL state.</li>
                            </ol>
                           
                            </p>
                    </div>

                     <div class="card-body bg-base-100">
                        <h2 class="card-title text-primary text-3xl">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                           
                            </p>
                    </div>
                    
                     <div class="card-body bg-base-100">
                        <h2 class="card-title text-primary text-3xl">What is a unit test? Why should write unit tests?</h2>
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                            </p>
                    </div>

                     <div class="card-body bg-base-100">
                        <h2 class="card-title text-primary text-3xl">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component. [...array] clones an array but it doesn't get the updated value. That's why we use state.
                            </p>
                    </div>


                </div>
            
        </div>
    );
};

export default Blogs;