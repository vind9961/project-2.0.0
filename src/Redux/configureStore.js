import {HealthProduct} from './HealthProduct';
import {slide} from './slide';
import {LabRed} from './PathLab';
import {medicine} from './medicine';
import {createStore} from 'redux';
import {combineReducers} from 'redux';

export const configureStore = () => {
  const store = createStore(
                combineReducers({
                HealthProduct: HealthProduct,
                slide: slide,
                Lab: LabRed,
                Medicine: medicine
         })
  );
  return store;
}
