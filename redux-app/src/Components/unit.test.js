import { render, screen } from '@testing-library/react';
import Update from './update';


  test('renders Active link of Navbar', () => {
    render(<Update/>);
    const linkElement = screen.getByText('postdata');
    expect(linkElement).toBeInTheDocument();
  });