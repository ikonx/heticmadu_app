import React, { useState, useEffect, useContext } from 'react';
import TagsContext from './tags.context';
import { getTags, deleteTag as deleteTagAPI } from '@utils/http';
import { TagModel } from '@utils/models/tag.model';
// import UserContext from 'contexts/user/user.context';

interface Props {}

const defaultTags: TagModel[] = [
  {
    tag: 'africain',
    id: 1,
  },
  {
    tag: 'indien',
    id: 2,
  },
  {
    tag: 'italien',
    id: 3,
  },
  {
    tag: 'mexicain',
    id: 4,
  },
  {
    tag: 'junkfood',
    id: 5,
  },
  {
    tag: 'vegan',
    id: 6,
  },
];

const TagsProvider: React.FC<Props> = ({ children }) => {
  const [tags, setTags] = useState<TagModel[]>(defaultTags);
  const [fetchingTags, setFetchingTags] = useState<boolean>(false);
  // const { isLogin } = useContext(UserContext);

  // TODO: manage user context

  // useEffect(() => {
  //   setFetchingTags(true);
  //   getTags().then((res: any) => {
  //     if (res.status === 200) {
  //       setTags(res.data);
  //       setFetchingTags(false);
  //     }
  //   });
  //   // if (isLogin) {
  //   //   setFetchingTags(true);
  //   //   getTags().then((res: any) => {
  //   //     if (res.status === 200) {
  //   //       setTags(res.data);
  //   //       setFetchingTags(false);
  //   //     }
  //   //   });
  //   //   setFetchingTags(false);
  //   // }
  // }, []);

  const retreiveTags = () => {
    setFetchingTags(true);
    getTags().then((res: any) => {
      if (res.status === 200) {
        setTags(res.data);
        setTimeout(() => {
          setFetchingTags(false);
        }, 2000);
      }
    });
  };

  const refreshTags = () =>
    getTags().then((res: any) => {
      if (res.status === 200) {
        setTags(res.data);
        setFetchingTags(false);
      }
      return res;
    });

  const deleteTag = (_id: string | number) => {
    setFetchingTags(true);
    deleteTagAPI(_id).then((res: any) => {
      if (res.status === 200) {
        refreshTags();
        setFetchingTags(false);
      }
      return res;
    });
  };

  return (
    <TagsContext.Provider
      value={{
        tags,
        setTags,
        fetchingTags,
        refreshTags,
        deleteTag,
        retreiveTags,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
