import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div className="lg:w-2/4 mx-auto">
        <div className="text-center mt-5">
          <pre>
            <code className="text-4xl font-bold">Md. Abdullah Al Mamun</code>
          </pre>
          <pre className="my-3">
            <code className="text-2xl font-bold">
              abdullahmamun1597@gmail.com
            </code>
          </pre>
          <pre className="my-3">
            <code className="text-2xl font-bold">01832618243</code>
          </pre>
        </div>
        <div className="my-6">
          <h2 className="text-2xl font-bold my-6">
            <u>Education:</u>
          </h2>
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
            <pre>
              <code className="text-xl font-bold">
                Technologies that I Learned :
              </code>
            </pre>
          </div>
          <div className="grid grid-cols-2">
            <div className="font-bold">
              <p>* HTML5</p>
              <p>* CSS3</p>
              <p>* Bootstrap 5</p>
              <p>* TailwindCSS</p>
              <p>* DaisyUI</p>
            </div>
            <div className="font-bold">
              <p>* Javascript (ES6)</p>
              <p>* ReactJS</p>
              <p>* NodeJS</p>
              <p>* ExpressJS</p>
              <p>* Firebase</p>
              <p>* MongoDb</p>
            </div>
          </div>
          <div className="mockup-code bg-slate-400 text-center my-8">
            <pre>
              <code className="text-xl font-bold font-sans text-black">
                Projects Links, that I Completed:
              </code>
            </pre>
          </div>
          <div>
            <div>
              <p className="mb-3">
                *{" "}
                <a
                  className="font-bold"
                  href="https://the-dentist-33b3e.web.app/"
                >
                  https://the-dentist-33b3e.web.app/
                </a>
              </p>
            </div>
            <div>
              <p className="mb-3">
                *{" "}
                <a
                  className="font-bold"
                  href=" https://our-laptop-city.netlify.app/"
                >
                  https://our-laptop-city.netlify.app/
                </a>
              </p>
            </div>
            <div>
              <p className="mb-3">
                *{" "}
                <a
                  className="font-bold"
                  href="https://bikehaaat-d8dde.web.app/"
                >
                  https://bikehaaat-d8dde.web.app/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
