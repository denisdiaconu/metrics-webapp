import { reciveAnime, receiveFilter } from '../redux/api/api';

describe('Testing actions of receiving data', () => {
  it('reciveReservationMissions working fine', () => {
    const payload = [];
    const expected = {
      type: 'RECEIVE_ANIME',
      payload,
    };
    expect(reciveAnime(payload)).toEqual(expected);
  });

  it('reciveReservationrockets working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'RECEIVE_FILTER',
      payload,
    };
    expect(receiveFilter(payload)).toEqual(expected);
  });
});
