import { createContext, useContext } from 'react';

const PageContext = createContext({
  setTitle: () => {},
  setDescription: () => {},
  setKeywords: () => {}
});

export const usePageContext = () => useContext(PageContext);

export default PageContext;