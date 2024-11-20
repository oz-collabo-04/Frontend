import Chat from './Chat';

const AllChats = () => {
  return (
    <div className='chatListContainer'>
      <div className='chatList'>
        <Chat />
        <Chat />
      </div>
    </div>
  );
};

export default AllChats;
