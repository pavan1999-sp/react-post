import { render, screen } from '@testing-library/react';
import App from './App';
import update from './Components/update';

describe('testing App Component',()=>
{
  test('renders Active link of Navbar', () => {
    render(<App />);
    const linkElement = screen.getByText('Update');
    expect(linkElement).toBeInTheDocument();
  });
 
  test('renders post Data Navbar', () => {
    render(<Update />);
    const linkElement = screen.getByText('PostData');
    expect(linkElement).toBeInTheDocument();
  });
 
  
}
)