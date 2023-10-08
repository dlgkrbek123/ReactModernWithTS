const DispatchEvent = () => {
  const onCallDispatchEvent = () => {
    console.log('onCallDispatchEvent');

    // dispatchEvent 메소드로 발생해서 isTrusted가 false이다.
    document.getElementById('root')?.dispatchEvent(
      new Event('click', {
        bubbles: true,
      })
    );
  };

  const onCallClick = () => {
    console.log('onCallClick');
    document.getElementById('root')?.click();
    // click 메소드로 발생해서 isTrusted가 false이다.
  };

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  );
};

export default DispatchEvent;
