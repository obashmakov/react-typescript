import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Info Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Vero consectetur dolor eum, ad voluptatem illum rerum dolorum, 
        earum nam neque perferendis rem soluta culpa, 
        delectus accusantium eveniet numquam tempora molestiae?
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back to todos
      </button>
    </>
  )
};
