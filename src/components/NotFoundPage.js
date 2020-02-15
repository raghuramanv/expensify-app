import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => (
  <div>
    Oops! This page is not found (Http Status: 404)
    <p>
      <Link to="/">Home</Link>
    </p>
  </div>
);

export default NotFoundPage;