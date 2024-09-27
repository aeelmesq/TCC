import BlocoInteresses from './seusInteresses';
import API_NEWS from '../../../../../API/mediaStack';

export default function SeusInteresses({ title, style }) {
  // const {noticias} = API_NEWS()
  // const News = []
  // let num
  // while (News.length < 6) {
  //   num = Math.floor(Math.random() * noticias.length) + 14
  //   if (!News.includes(noticias[num])) {
  //     News.push(noticias[num])
  //   }
  // }
  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="asideBlock">
        <div className="block">
          <BlocoInteresses data={News} />
        </div>
      </div>
    </div>
  );
}
