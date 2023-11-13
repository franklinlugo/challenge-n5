import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';

const ComponentUnderTest = () => <App lang="EN" />;

const setup = () => render(<ComponentUnderTest />);

describe('App', () => {
  it('should render', async () => {
    const { getByText, queryByText } = setup();
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => {
      expect(queryByText("Harry Potter and the Philosopher's Stone")).toBeInTheDocument();
    });
  });
  it('should fetch actors', async () => {
    const { getByText, queryByText } = setup();

    const getActorsButton = getByText('Get Actors');
    fireEvent.click(getActorsButton);

    await waitFor(() => {
      expect(queryByText('Daniel Radcliffe')).toBeInTheDocument();
    });
  });
});
