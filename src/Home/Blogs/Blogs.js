import React from 'react';
import proto from '../Blogs/Prototypal-Inheritance.png'
import output from '../Blogs/Capture.PNG'
const Blogs = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 p-10 mx-auto'>
            <div class="card  lg:max-w-lg bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h4 className="card-title text-center "> How will you improve the performance of a React Application?</h4>
                    <h6>1. Using Production Mode Flag in Webpack</h6>
                    <p><small>If you are using webpack 4 as a module bundler for your app, you can consider setting the mode option to production. This basically tells webpack to use the built-in optimization:</small></p>
                    <h6>2. Dependency optimization</h6>
                    <p><small>When considering optimizing the application bundle size, its worth checking how much code you are actually utilizing from dependencies. For example, you could be using Moment.js which includes localized files for multi-language support. If you dont need to support multiple languages, then you can consider using moment-locales-webpack-plugin to remove unused locales for your final bundle.</small></p>
                    <h6>3. Use React.Fragments to Avoid Additional HTML Element Wrappers</h6>
                    <p><small>React.fragments lets you group a list of children without adding an extra node.</small></p>
                    <h6>4. Avoid Inline Function Definition in the Render Function</h6>
                    <p><small>Since functions are objects in JavaScript ({ } !== { }), the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector.</small></p>
                    <h6>5. Spreading props on DOM elements</h6>
                    <p><small>You should avoid spreading properties into a DOM element as it adds unknown HTML attribute, which is unnecessary and a bad practice.</small></p>
                </div>


            </div>
            <div class="card  lg:max-w-lg bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h4 className="card-title text-center ">  What is a unit test?</h4>
                    <h6>Unit testing is performed during the coding stage of a software development project to test individual units of the application. Its designed to test that each unit of the software code performs as required. A unit might be a class or class method in object-oriented languages and a procedure or function in procedural and functional software languages.

                        Unit tests need to run quickly, so they run in isolation without external processes or systems.</h6>

                    <h4 className='card-title text-center'> Why should write unit tests?</h4>
                    <h6>All of the factors listed above are interconnected and imply that unit testing undeniably contributes to improving your software. Unit testing may seem like a tedious process at first, but in the long run, its benefits are clear. Unit testing ensures that all code meets quality standards before its deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</h6>

                </div>


            </div>
            <div className="card  lg:max-w-lg bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h4 className="card-title text-center  ">How does prototypical inheritance work?</h4>
                    <img src={proto} alt="" />
                    <img src={output} alt="" />
                    <h6 className='py-5'>In the above code we have set the proto property for the ‘car’ object to reference to the ‘vehicle’ object. Therefore when we call car.getColor, JS engine first looks for the getColor function in the ‘car’ object. When it does not find getColor there it looks in the object referenced via proto property ie the ‘vehicle’ object. The getColor is then executed. The this refers to the ‘car’ object and hence we get the output color as red and not black.

                        Likewise when we call car.tyres, since tyres property does on exist on the ‘car’ object, JS engine travels the prototype chain and returns the value. In this case it returns the value of the ‘tyre’ property as found in the ‘vehicle’ object.</h6>

                </div>


            </div>
            <div class="card  lg:max-w-lg bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h4 className="card-title text-center "> What are the different ways to manage a state in a React application?</h4>
                    <h6 className='py-10'>There are four main types of state you need to properly manage in your React apps: <br />
                        1.Local state <br />
                        2.Global state <br />
                        3.Server state <br />
                        4.URL state
                    </h6>

                    <h5 className='card-title text-center py-5'> 01: Local (UI) state – Local state is data we manage in one or another component.</h5>
                    <h6>Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</h6>
                    <h5 className='card-title text-center py-5'>02: Global (UI) state – Global state is data we manage across multiple components.</h5>
                    <h6>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.</h6>
                    <h5 className='card-title text-center py-5'> 03: Server state – Data that comes from an external server that must be integrated with our UI state.</h5>
                    <h6>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.</h6>
                    <h5 className='card-title text-center py-5'> 04:URL state – Data that exists on our URLs, including the pathname and query parameters.</h5>
                    <h6>

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</h6>

                </div>


            </div>
            <div class="card  lg:max-w-lg bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h4 className="card-title text-center ">   Why you do not set the state directly in React?</h4>
                    <h6>when we update the state of a component all it's children are going to be rendered as well. or our entire component tree rendered.

                        but when i say our entire component tree is rendered that doesn’t mean that the entire DOM is updated. when a component is rendered we basically get a react element, so that is updating our virtual dom.

                        React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn’t update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.

                        then react will figure out what is changed and based on that it will update the real DOM accordingly .</h6>

                   

                </div>


            </div>
        </div>
    );
};

export default Blogs;