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
class FileClass {
  constructor(
    public id: number,
    public name: string,
    public extension: string,
  ) {}
}
function generateRandomFiles(): FileClass {
  const id = Math.floor(Math.random() * 1000);
  const files = ['file.pdf', 'file.docx', 'file.jpg', 'file.xlsx', 'file.txt'];
  const extensions = ['pdf', 'docx', 'jpg', 'xlsx', 'txt'];
  const index = Math.floor(Math.random() * files.length);
  const name = files[index];
  const extension = extensions[index];
  return new FileClass(id, name, extension);
}

//  ----------------------------------------------------------------

const useMockFilesData = () => {
  const [files, setFiles] = useState(
    createArrayOfObjects(FileClass, 10, generateRandomFiles),
  );

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (files.length >= 25) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setFiles(
        files.concat(createArrayOfObjects(FileClass, 5, generateRandomFiles)),
      );
    }, 1500);
  };
  return { files, fetchMoreData, hasMore };
};

export default useMockFilesData;
