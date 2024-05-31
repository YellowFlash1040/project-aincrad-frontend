import { IEvent } from "../../../types";

interface IEventsState {
  events: IEvent[];
  isLoading: boolean;
  activeEvent: IEvent | null;
}

export default IEventsState;
