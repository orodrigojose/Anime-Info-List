import { useCallback, useRef } from 'react';

export const useDebounce = (delay: number) => {
	const debouncing = useRef<NodeJS.Timeout>();
	
	const debounce = useCallback((fn: () => void) => {
		if (debouncing.current) clearTimeout(debouncing.current);
		debouncing.current = setTimeout(() => fn(), delay);
	}, [delay]);
	
	return { debounce };
}