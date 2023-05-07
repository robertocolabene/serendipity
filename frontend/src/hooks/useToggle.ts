import { useCallback, useState } from "react";

export default function useToggle(initialState: boolean = false): [boolean, any] {
    // Initialize the state
    const [state, setState] = useState<boolean>(initialState);
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback((force?: boolean): void => setState(state => typeof force === 'boolean' ? force : !state), []);
    return [state, toggle]
}