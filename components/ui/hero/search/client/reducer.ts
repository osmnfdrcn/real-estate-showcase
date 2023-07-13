interface State {
  city: string;
  type: string;
  numberOfBedroom: string;
  min: string;
  max: string;
}

type Action =
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_TYPE"; payload: string }
  | { type: "SET_NUMBER_OF_BEDROOM"; payload: string }
  | { type: "SET_PRICE_RANGE"; payload: string };

export const initialState: State = {
  city: "",
  type: "",
  numberOfBedroom: "",
  min: "",
  max: "",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_TYPE":
      return { ...state, type: action.payload };
    case "SET_NUMBER_OF_BEDROOM":
      return { ...state, numberOfBedroom: action.payload };
    case "SET_PRICE_RANGE":
      return {
        ...state,
        min: action.payload.split("-")[0],
        max: action.payload.split("-")[1],
      };
    default:
      return state;
  }
};
