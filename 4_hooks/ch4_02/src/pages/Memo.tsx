import { useMemo } from 'react';
import * as D from '../data';
import { Avatar, Title } from '../components';

const Memo = () => {
  const headTexts = useMemo(
    () => ['No', 'Name', 'Job Title', 'Email Address'],
    []
  );
  const users = useMemo(() => D.makeArray(10).map(D.makeRandomUser), []);

  const head = useMemo(
    () => headTexts.map((text) => <th key={text}>{text} </th>),
    [headTexts]
  );
  const body = useMemo(
    () =>
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
      )),
    [users]
  );

  return (
    <section className="mt-4">
      <Title>Memo</Title>
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

export default Memo;
