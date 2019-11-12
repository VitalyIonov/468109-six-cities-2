import {actionCreator} from "./reducer";
import {CHANGE_CITY} from "./constants/actions";

it(`Action creator for change city returns correct action`, () => {
  expect(actionCreator.changeCity(`Paris`)).toEqual({
    type: CHANGE_CITY,
    payload: `Paris`
  });
});
