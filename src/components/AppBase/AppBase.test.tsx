import { renderWithReduxAndNavigation } from 'components/App/App';

describe('App', () => {
  test('Renders StartView on load', async () => {
    const { getByTestId } = renderWithReduxAndNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });
});