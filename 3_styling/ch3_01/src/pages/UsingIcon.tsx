import { Icon } from '../components';

const UsingIcon = () => {
  return (
    <div>
      <h3>UsingIcon</h3>
      <Icon name="home" style={{ color: 'blue' }} />
      <Icon
        name="check_circle_outline"
        style={{
          fontSize: 50,
          color: 'red',
        }}
      />
    </div>
  );
};

export default UsingIcon;