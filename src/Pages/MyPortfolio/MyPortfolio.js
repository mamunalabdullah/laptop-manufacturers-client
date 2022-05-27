import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../assets/Laptop-store/Screenshot_1.png";
import image2 from "../../assets/Laptop-store/Screenshot_2.png";
import image3 from "../../assets/Laptop-store/Screenshot_3.png";
import image4 from "../../assets/Laptop-store/Screenshot_4.png";
import image5 from "../../assets/Laptop-store/Screenshot_5.png";
import image6 from "../../assets/Laptop-store/Screenshot_6.png";
import image7 from "../../assets/Laptop-store/Screenshot_7.png";
import book0 from "../../assets/book/Screenshot_1.png";
import book1 from "../../assets/book/Screenshot_2.png";
import book2 from "../../assets/book/Screenshot_3.png";
import book3 from "../../assets/book/Screenshot_4.png";
import ydkjs0 from "../../assets/ydkjs-ss/Screenshot_1.png";
import ydkjs1 from "../../assets/ydkjs-ss/Screenshot_2.png";
import ydkjs2 from "../../assets/ydkjs-ss/Screenshot_3.png";
import ydkjs3 from "../../assets/ydkjs-ss/Screenshot_4.png";
import ydkjs4 from "../../assets/ydkjs-ss/Screenshot_5.png";

const MyPortfolio = () => {
    return (
        <div>
            <div className='lg:w-2/4 mx-auto'>
                <div className="text-center mt-5">
                    <pre><code className='text-4xl font-bold'>Md. Abdullah Al Mamun</code></pre>
                    <pre className='my-3'><code className='text-2xl font-bold'>abdullahmamun1597@gmail.com</code></pre>
                    <pre className='my-3'><code className='text-2xl font-bold'>01832618243</code></pre>
                </div>
                <div className='my-6'>
                    <h2 className='text-2xl font-bold my-6'><u>Education:</u></h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full table-compact">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Inst. Name</th>
                                    <th>Study Field</th>
                                    <th>Passing Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Gono Bishwabidyalay</td>
                                    <td>Bsc in Computer Science & Engineering</td>
                                    <td>2020</td>
                                </tr>
                                <tr className="active">
                                    <th>2</th>
                                    <td>Qadirabad Cantonment Sapper College</td>
                                    <td>Science</td>
                                    <td>2014</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>St. Joseph's High School</td>
                                    <td>Science</td>
                                    <td>2012</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mockup-code bg-gray-500 text-yellow-100 text-center my-8">
                        <pre><code className='text-xl font-bold'>Technologies that I Learned :</code></pre>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='font-bold'>
                            <p>* HTML5</p>
                            <p>* CSS3</p>
                            <p>* Bootstrap 5</p>
                            <p>* TailwindCSS</p>
                            <p>* DaisyUI</p>
                        </div>
                        <div className='font-bold'>
                            <p>* Javascript (ES6)</p>
                            <p>* ReactJS</p>
                            <p>* NodeJS</p>
                            <p>* ExpressJS</p>
                            <p>* Firebase</p>
                            <p>* MongoDb</p>
                        </div>
                    </div>
                    <div className="mockup-code bg-slate-400 text-center my-8">
                        <pre><code className='text-xl font-bold font-sans text-black'>Projects Links, that I Completed:</code></pre>
                    </div>
                    <div>
                        <div>
                            <p className='mb-3'>* <a href="https://laptop-store-2d59d.web.app/">https://laptop-store-2d59d.web.app/</a></p>
                            <Carousel autoPlay={true}>
                                <div>
                                    <img src={image1} alt='' />
                                </div>
                                <div>
                                    <img src={image2} alt='' />
                                </div>
                                <div>
                                    <img src={image3} alt='' />
                                </div>
                                <div>
                                    <img src={image4} alt='' />
                                </div>
                                <div>
                                    <img src={image5} alt='' />
                                </div>
                                <div>
                                    <img src={image6} alt='' />
                                </div>
                                <div>
                                    <img src={image7} alt='' />
                                </div>
                            </Carousel>
                        </div>
                        <div>
                            <p className='mb-3'>* <a className='font-bold' href="https://ass10-c3f18.web.app/">https://ass10-c3f18.web.app/</a></p>
                            <Carousel autoPlay={true}>
                                <div>
                                    <img src={ydkjs0} alt='' />
                                </div>
                                <div>
                                    <img src={ydkjs1} alt='' />
                                </div>
                                <div>
                                    <img src={ydkjs2} alt='' />
                                </div>
                                <div>
                                    <img src={ydkjs3} alt='' />
                                </div>
                                <div>
                                    <img src={ydkjs4} alt='' />
                                </div>

                            </Carousel>
                        </div>

                        <div>
                            <p className='mb-3'>* <a className='font-bold' href="https://elaborate-youtiao-acd8bf.netlify.app/">https://elaborate-youtiao-acd8bf.netlify.app/</a></p>
                            <Carousel autoPlay={true}>
                                <div>
                                    <img src={book0} alt='' />
                                </div>
                                <div>
                                    <img src={book1} alt='' />
                                </div>
                                <div>
                                    <img src={book2} alt='' />
                                </div>
                                <div>
                                    <img src={book3} alt='' />
                                </div>

                            </Carousel>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;