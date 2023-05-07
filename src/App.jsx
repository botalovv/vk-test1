import { useState } from 'react';
import './App.css';

function App() {

  const floors = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const hours = ["10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"];

  const [tower, setTower] = useState('Башня А');
  const [floor, setFloor] = useState(3);
  const [room, setRoom] = useState(1);
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const changeTower = (e) => {
    setTower(e.target.value)
  }

  const changeRoom = (e) => {
    setRoom(e.target.value);
  }

  const changeFloor = (e) => {
    setFloor(e.target.value);
  }

  const changeComment = (e) => {
    setComment(e.target.value);
  }

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  const changeHour = e => {
    setHour(e.target.value)
  }

  const logData = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
      Building: tower,
      Floor: floor,
      Room: room, 
      Date: date,
      Hour: hour,
      Comment: comment,
    }));
    clearForm();
  }

  const clearForm = () => {
    setComment('');
    setDate('')
    setFloor(3);
    setRoom(1);
    setTower('Башня А');
    setHour('');
  }

  return (
    <div>
      <form className='form'>
        <h1>Бронирование переговорной</h1>
        <select  className='item' value={tower} onChange={changeTower}>
          <option disabled>Выберите башню</option>
          <option value="Башня А">Башня А</option>
          <option value="Башня Б">Башня Б</option>
        </select>
        <select  className='item' value={floor} onChange={changeFloor}>
          <option disabled>Выберите этаж</option>
           {floors.map(floor => 
              <option value={floor} key={floor}>{floor}</option>
           )}
        </select>
        <select className='item' value={room} onChange={changeRoom}>
          <option disabled>Выберите кабинет</option>
          {rooms.map(room => 
              <option value={room} key={room}>{room}</option>
            )}
        </select>
        <input className='item date' onChange={changeDate} min="2023-05-07" type="date"/>
        <select className='item' value={hour} onChange={changeHour}>
            <option disabled>Выберите временной промежуток</option>
            {hours.map(hour => 
              <option value={hour} key={hour}>{hour}</option>
              )}
        </select>
        <textarea className='item' placeholder='Добавьте комментарий' value={comment} onChange={changeComment}></textarea>
        <button className='item' onClick={logData}>Отправить данные</button>
        <button onClick={clearForm} className='item' type='reset'>Очистить форму</button>
      </form>
    </div>
  );
}

export default App;