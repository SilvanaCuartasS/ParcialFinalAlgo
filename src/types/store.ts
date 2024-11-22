export type Observer = { render: () => void } & HTMLElement;

type event = {
    title : string;
    date : number;
    location : string;
    image : string;
    attendees  : number;
}

export type AppState = {
  screen: string;
  event: event[];
};

export enum SomeActions {
  "X" = "X",
}

export interface XAction {
  action: SomeActions.X;
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;
