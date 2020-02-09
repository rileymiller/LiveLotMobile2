import { renderWithNavigation } from 'components/App/App';

describe('App', () => {
  test('Renders StartView on load', async () => {
    const { getByTestId } = renderWithNavigation();
    expect(getByTestId('title').props.children).toMatch('LiveLot');
  });
});
