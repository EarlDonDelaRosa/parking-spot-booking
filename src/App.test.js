import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ValidateBooking from './parking-lots/ValidateBooking';
import ValidateByFormik from './parking-lots/ValidateByFormik';

describe('This is login page', () => {
  beforeEach(() => {
    render(<ValidateByFormik />);
  })

  test('h2 Login', () => {
    const linkElement = screen.getByText(/Login/);
    expect(linkElement).toBeInTheDocument();
  });

  test('To check if data has changed', () => {
    const linkElement = screen.getByText(/Login/);
    expect(linkElement).toMatchSnapshot();
  });

  test('placeholder for Username test', () => {
    const linkElement = screen.getByPlaceholderText(/Username/);
    expect(linkElement).toBeInTheDocument();
  })

  test('placeholder for Username test', () => {
    const linkElement = screen.getByPlaceholderText(/Password/);
    expect(linkElement).toBeInTheDocument();
  })

  // test('button check', () => {
  //   const linkElement = screen.getAllByRole('button');
  //   fireEvent.click(linkElement);
  //   expect(linkElement).toHaveLength(1);
  // })

  test('input label', () => {
    const linkElement = screen.getByText(/Username/);
    expect(linkElement).toBeInTheDocument();
  })
})

describe('This is login page', () => {
  beforeEach(() => {
    render(<ValidateBooking />, {wrapper: Router});
  })

  test('h5 Welcome', () => {
    const linkElement = screen.getByText(/Welcome/);
    expect(linkElement).toBeInTheDocument();
  });

  test('To check if data has changed', () => {
    const linkElement = screen.getByText(/Welcome/);
    expect(linkElement).toMatchSnapshot();
  });
})