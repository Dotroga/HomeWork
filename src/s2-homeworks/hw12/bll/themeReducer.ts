import {AppStoreType} from "../../hw10/bll/store";

const initState = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: ActionType
): typeof initState => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID": {
 debugger
      return {
        themeId: +action.id,
      };
    }

    default:
      return state;
  }
};

type ActionType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: string) =>
  ({type: "SET_THEME_ID", id} as const); // fix any

export const getThemIdSelector = (state: AppStoreType): number => {
  return state.theme.themeId;
};