import * as Actions from "./constants";

export const loadServer = (initialData) => async (dispatch) => {
    try {
        const { data } = await api.loadServer(initialData);

        dispatch({
            type: Actions.LOAD_SERVER,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}