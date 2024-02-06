import { render, screen } from "@testing-library/react";
import Header from "./Header";


describe('Header Component', () => {
    test('render Expense Tracker as a text', () => {

        render(<Header />);
    
        const expenseTrackerElement = screen.getByText('Expense Tracker');
        expect(expenseTrackerElement).toBeInTheDocument();
    });

    test('render Logout as a text', () => {

        render(<Header />);
    
        const expenseTrackerElement = screen.getByText('Logout');
        expect(expenseTrackerElement).toBeInTheDocument();
    });

    test('render Expenses as a text', () => {

        render(<Header />);
    
        const expenseTrackerElement = screen.getByText('Expenses');
        expect(expenseTrackerElement).toBeInTheDocument();
    });

    test('render  Products as a text', () => {

        render(<Header />);
    
        const expenseTrackerElement = screen.getByText('Products');
        expect(expenseTrackerElement).toBeInTheDocument();
    });



})
