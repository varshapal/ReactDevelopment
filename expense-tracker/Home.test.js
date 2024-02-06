import { render, screen } from "@testing-library/react";

import Home from "./Home";

describe('Home Component', () => {
    test('render Welcome to Expense Tracker as a text', () => {
        render(<Home />);

        const welcomeElement = screen.getByText('Welcome to Expense Tracker');
        expect(welcomeElement).toBeInTheDocument();
    })

    test('render Show Expenses as a text', () => {
        render(<Home />);

        const welcomeElement = screen.getByText('Show Expenses');
        expect(welcomeElement).toBeInTheDocument();
    })

    test('render Profile as a text', () => {
        render(<Home />);

        const welcomeElement = screen.getByText(/profile/i);
        expect(welcomeElement).toBeInTheDocument();
    })
})