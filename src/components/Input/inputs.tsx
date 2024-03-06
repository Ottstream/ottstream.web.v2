import { useState } from 'react';

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import { useField } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';

const Inputs = ({ label, showPasswordToggle = false, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div>
      {label && <Typography.Title level={5}>{label}</Typography.Title>}

      {props.type === 'password' && showPasswordToggle ? (
        <Input.Password
          {...field}
          {...props}
          onFocus={handleFocus}
          iconRender={visible =>
            visible ? (
              <EyeOutlined
                onClick={handleTogglePassword}
                style={{
                  width: '14px',
                  height: '14px',
                  color: isFocused ? '#01B2B8' : '#8C8C8C',
                }}
              />
            ) : (
              <EyeInvisibleOutlined
                onClick={handleTogglePassword}
                style={{
                  width: '14px',
                  height: '14px',
                  color: isFocused ? '#01B2B8' : '#8C8C8C',
                }}
              />
            )
          }
          visibilityToggle
        />
      ) : (
        <Input {...field} {...props} />
      )}

      {meta.touched && meta.error ? (
        <div className="error" style={{ fontSize: '10px', color: 'red' }}>
          {meta.error}
        </div>
      ) : null}

      {field.name === 'password' && (
        <PasswordStrengthBar
          password={field.value}
          shortScoreWord=""
          scoreWords={[]}
        />
      )}
    </div>
  );
};

export default Inputs;
