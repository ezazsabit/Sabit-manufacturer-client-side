import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <p className='mt-5 text-6xl text-secondary'>My Portfolio!!</p>

            <p><span className='text-yellow-800 text-lg mt-5'>Name:</span>Ezaz Mahmud Sabit</p>
            <p><span className='text-yellow-800 text-lg mt-5'>Email:</span>ezazsabit03@gmail.com</p>
            <p><span className='text-yellow-800 text-lg mt-5'>Education:</span></p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Degree</th>
                            <th>Institution</th>
                            <th>Passing Year</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>SSC</td>
                            <td>Chittagong Collegiate School</td>
                            <td>2016</td>
                        </tr>

                        <tr>

                            <td>HSC</td>
                            <td>Notre Dame College,Dhaka</td>
                            <td>2018</td>
                        </tr>

                        <tr>

                            <td>BSc.</td>
                            <td>KUET</td>
                            <td>Running...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><span className='text-yellow-800 text-lg mt-5'>Skills:</span></p>
            <ul>
                <hr className='h-11'></hr>
                <li>Html</li>
                <li>Css</li>
                <li>Css Bootstrap</li>
                <li>Tailwind Css</li>
                <li>JS</li>
                <li>ES6</li>
                <li>React</li>
                <li>React Router</li>
                <li>Firebase Authentication</li>
                <li>Express.js</li>
                <li>Mongodb</li>
                <li>React Query</li>
                <li>React from hook</li>
                <li>React date picker</li>

            </ul>
            <p><span className='text-yellow-800 text-lg mt-5'>Website link:</span></p>
           
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Site1</th>
                            <th><a href="https://dazzling-basbousa-f07ae1.netlify.app"><span className='text-blue-800 text-lg'>https://dazzling-basbousa-f07ae1.netlify.app</span></a></th>
                          
                        </tr>
                        <tr>

                            <th>Site2</th>
                            <th><a href="https://effortless-monstera-a92251.netlify.app"><span className='text-blue-800 text-lg'>https://effortless-monstera-a92251.netlify.app</span></a></th>
                          
                        </tr>
                        <tr>

                            <th>Site3</th>
                            <th><a href="https://melodious-phoenix-0022d4.netlify.app"><span className='text-blue-800 text-lg'>https://melodious-phoenix-0022d4.netlify.app</span></a></th>
                          
                        </tr>
                    </thead>
                    
                </table>
                </div>

        </div>
    );
};

export default Portfolio;