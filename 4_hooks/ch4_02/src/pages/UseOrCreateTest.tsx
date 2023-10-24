import { Avatar, Title } from '../components';
import * as D from '../data';
import { useOrCreate } from './useOrCreate';

const UseOrCreateTest = () => {
  const headTexts = useOrCreate<string[]>('headerTexts', () => [
    'No',
    'Name',
    'Job Title',
    'Email Address',
  ]);
  const users = useOrCreate<D.IUser[]>('users', () =>
    D.makeArray(10).map(D.makeRandomUser)
  );

  const head = useOrCreate('head', () =>
    headTexts.map((text) => <th key={text}>{text} </th>)
  );
  const body = useOrCreate('children', () =>
    users.map((user, idx) => (
      <tr key={user.uuid}>
        <th>{idx + 1}</th>
        <td className="flex items-center">
          <Avatar src={user.avatar} size="1.5rem" />
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    ))
  );

  return (
    <section className="mt-4">
      <Title>CreateOrUseTest</Title>
      <div className="overflow-x-auto mt-4 p-4">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </section>
  );
};

export default UseOrCreateTest;
