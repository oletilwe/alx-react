import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Login component when isLoggedIn is false', () => {
    const { queryByTestId } = render(<App isLoggedIn={false} />);
    expect(queryByTestId('login-screen')).toBeInTheDocument();
    expect(queryByTestId('course-list')).not.toBeInTheDocument();
  });

  describe('when isLoggedIn is true', () => {
    test('does not render Login component', () => {
      const { queryByTestId } = render(<App isLoggedIn={true} />);
      expect(queryByTestId('login-screen')).not.toBeInTheDocument();
    });

    test('renders CourseList component', () => {
      const { queryByTestId } = render(<App isLoggedIn={true} />);
      expect(queryByTestId('course-list')).toBeInTheDocument();
    });
  });
});
