import {configureStore} from '@reduxjs/toolkit';
import logreducer from '../store/logslice';

const store = configureStore({
  reducer: {
    logs: logreducer,
  },
});
export default store;
