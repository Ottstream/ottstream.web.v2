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
class UserClass {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public unreadCount: number,
    public social: string,
  ) {}
}
function generateRandomUsers(): UserClass {
  const id = Math.floor(Math.random() * 1000);
  const names = ['Jean', 'Jack', 'Raf', 'Jonathan', 'Vazgen'];
  const statuses = ['online', 'offline', 'blocked'];
  const name = names[Math.floor(Math.random() * names.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const unreadCounts = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    0,
    0,
    Math.floor(Math.random() * 10),
  ];
  const unreadCount =
    unreadCounts[Math.floor(Math.random() * unreadCounts.length)];
  const socials = ['instagram', 'viber', 'whatsapp', 'telegram', 'x'];
  const social = socials[Math.floor(Math.random() * socials.length)];

  return new UserClass(id, name, status, unreadCount, social);
}

//  ----------------------------------------------------------------

const useMockUsersData = ({
  initialNumber = 10,
}: {
  initialNumber?: number;
}) => {
  console.log('initialNumber', initialNumber);
  const [users, setUsers] = useState(
    createArrayOfObjects(UserClass, initialNumber, generateRandomUsers),
  );

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (users.length >= initialNumber + 15) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setUsers(
        users.concat(createArrayOfObjects(UserClass, 5, generateRandomUsers)),
      );
    }, 1500);
  };
  return { users, fetchMoreData, hasMore };
};

export default useMockUsersData;
