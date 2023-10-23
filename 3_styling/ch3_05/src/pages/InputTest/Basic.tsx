import { Input } from '../../theme/daisyui';

const Basic = () => {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Basic</h2>
      <div className="flex justify-evenly mt-4">
        <input type="text" className="input input-primary" />
        <Input className="input-primary" />
      </div>
    </section>
  );
};

export default Basic;
