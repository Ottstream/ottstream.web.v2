import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup';
import { installers } from '../../constants';

const FilterByInstallers = () => {
  //TODO: get installers list when BE will be ready
  return <CheckboxGroup data={installers} checkAllText="select_installers" />;
};
export default FilterByInstallers;
