import type { AppState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import * as D from '../data';
import * as F from '../store/fetchUser';
import { Title, Avatar } from '../components';
import { Button } from '../theme/daisyui';

const FetchTest = () => {
  const {
    loading,
    errorMessage,
    fetchUser: user,
  } = useSelector<AppState, AppState>((state) => state);
  const dispatch = useDispatch();

  const getRemoteUser = useCallback(() => {
    dispatch<any>(F.getRemoteUser());
  }, []);

  const changeName = useCallback(() => {
    dispatch<any>(F.changeNameByFetching());
  }, []);

  const changeEmail = useCallback(() => {
    dispatch(F.changeEmail(D.randomEmail()));
  }, []);

  const changePicture = useCallback(() => {
    dispatch(F.changePicture({ large: D.randomAvatar() }));
  }, []);

  useEffect(() => {
    getRemoteUser();
  }, []);

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn btn-primary" onClick={getRemoteUser}>
          get remote user
        </Button>
        <Button className="ml-4 btn-sm btn btn-accent" onClick={changeName}>
          change name
        </Button>
        <Button className="ml-4 btn-sm btn btn-success" onClick={changeEmail}>
          change email
        </Button>
        <Button
          className="ml-4 btn-sm btn btn-secondary"
          onClick={changePicture}
        >
          change picture
        </Button>
      </div>
      {loading && <div className="flex items-center justify-center"></div>}
      {errorMessage.length && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
        </div>
      )}

      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  );
};

export default FetchTest;
