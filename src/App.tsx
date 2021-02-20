import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { Dictionary, QuickLink } from './core/Types';
import { Helpers } from './core/Helpers';

const App = () => {
  const [quickLinkList, setQuickLinkList] = useState<Dictionary<QuickLink>>({});

  const addItem = (name: string, urlList: string[]) => {
    const key: string = Helpers.generateKey();
    const listCopy: Dictionary<QuickLink> = { ...quickLinkList };
    const newItem: QuickLink = {
      key: key,
      name,
      urlList,
    };

    listCopy[key] = newItem;
    setQuickLinkList(listCopy);
  };

  const removeItem = (item: QuickLink): void => {
    const listCopy: Dictionary<QuickLink> = { ...quickLinkList };
    delete listCopy[item.key];
    if (Object.keys(listCopy).length === 0) {
      // TODO: ADD STORAGE MANAGER.
      // cookieManager.remove(CookieKeys.TASK_LIST);
    }
    setQuickLinkList(listCopy);
  };

  const editItem = (item: QuickLink): void => {
    const listCopy: Dictionary<QuickLink> = { ...quickLinkList };
    listCopy[item.key] = { ...item };
    setQuickLinkList(listCopy);
  };

  return (
    <div className="App">
      <MainPage
        quickLinkList={quickLinkList}
        addQuickLink={addItem}
        removeQuickLink={removeItem}
        editQuickLink={editItem}
      />
    </div>
  );
};

export default App;