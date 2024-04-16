import { Select as AntSelect } from 'antd';
import { Field, ErrorMessage, useField } from 'formik';
import { ISelectProps } from './types';

const { Option } = AntSelect;

const Select: React.FC<ISelectProps> = props => {
  const { label, className = '', required, name, options, ...rest } = props;
  const [field] = useField(name);

  return (
    <div className={className}>
      <label>
        {required && <span>*</span>}
        {label && label}
      </label>
      <AntSelect {...field} {...rest}>
        {options.map((option: any) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </AntSelect>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default Select;
