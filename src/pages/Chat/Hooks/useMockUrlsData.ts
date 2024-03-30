import { useState } from 'react';

// FOR GENERATING RANDOM ARRAYS

type Constructor<T> = new (...args: any[]) => T;

function createArrayOfObjects<T>(
  _type: Constructor<T>,
  count: number,
  valueGenerator: () => T,
): T[] {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(valueGenerator());
  }
  return result;
}
class UrlClass {
  constructor(
    public id: number,
    public title: string,
    public color: string,
    public link: string,
    public description: string,
  ) {}
}
function generateRandomUsers(): UrlClass {
  const id = Math.floor(Math.random() * 1000);
  const names = ['Title', 'Label', 'Article', 'Bookmark'];
  const index = Math.floor(Math.random() * names.length);
  const title = names[index];
  const colors = ['#BA982D', '#656AD2', '#ED4D4D', '#9547BF'];
  const color = colors[index];
  const links = ['asd.com', 'qwe.com', 'rtyu.net', 'xpl.net'];
  const link = links[index];
  const descriptions = [
    'Description one ',
    'Some other text',
    'Different one',
    'Liked it.',
  ];
  const description = descriptions[index];

  return new UrlClass(id, title, color, link, description);
}

//  ----------------------------------------------------------------

const useMockUrlsData = () => {
  const [urls, setUrls] = useState(
    createArrayOfObjects(UrlClass, 10, generateRandomUsers),
  );

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (urls.length >= 25) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setUrls(
        urls.concat(createArrayOfObjects(UrlClass, 5, generateRandomUsers)),
      );
    }, 1500);
  };
  return { urls, fetchMoreData, hasMore };
};

export default useMockUrlsData;
