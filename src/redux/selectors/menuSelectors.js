export const playNowLength = (state) => state.statePlayNow.length;

export const sortPlayNow = (state) => state.statePlayNow.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a,b) => b.release_date - a.release_date);

