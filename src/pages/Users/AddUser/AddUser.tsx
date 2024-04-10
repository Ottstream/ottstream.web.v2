import Tab from '@/components/Tabs/Tab';

const AddUser = () => {
  return (
    <div>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-expect-error*/}
      <Tab items={[{ title: 'ronaldo' }]} />
    </div>
  );
};

export default AddUser;
