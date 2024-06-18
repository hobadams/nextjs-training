import moment from './moment';

export default function Input() {
  console.log('Input component');
  console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

  return (
    <input placeholder="Type here" />
  )
}