import { createContext, useState, ReactNode } from 'react';

type SearchContextProps = { children: ReactNode }
type SearchContextType = {
	search: string,
	setSearch: (newState: string) => void
}

const initialValue = {
	search: '',
	setSearch: () => {}
}

export const SearchContext = createContext<SearchContextType>(initialValue);

export const SearchContextProvider = ({ children }: SearchContextProps) => {
	const [search, setSearch] = useState<string>('');
	
	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			{children}
		</SearchContext.Provider>
	)
}