import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();


    return (
        <div>
            <h2>Opps!!! 404 Page Not Found!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back to homepage</p>
                    <Link to={'/'}><button>Go Back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;