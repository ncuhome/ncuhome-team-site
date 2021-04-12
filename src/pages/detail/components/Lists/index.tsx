import React from 'react';
import './style.scss';

const ListItem = [
  {
    title:"Ant Design|设计资产的秩序之美",
    summary:"Hi，大家好！我是吾笙。非常荣幸在2020年的第一个周六，参加了第三届 SEE Conf 大会。在会上，我给大家分享了这一年来团队为设计资产升级所做的事情、总结的方法以及成果。希望通过这套方法和资产能够赋能给更多的用户，提高设计生产效率的同时更好的保障产品体验的内在一致性。随着 Ant Design 用户群体的激增，业务场景的多样化和复杂化，我们会面临更大的挑战，欢迎大家发挥极客精神和我们一起探索讨论，共同创造出更好用的设计资产。"
  },
  {
    title:"Ant Design|设计资产的秩序之美",
    summary:"Hi，大家好！我是吾笙。非常荣幸在2020年的第一个周六，参加了第三届 SEE Conf 大会。在会上，我给大家分享了这一年来团队为设计资产升级所做的事情、总结的方法以及成果。希望通过这套方法和资产能够赋能给更多的用户，提高设计生产效率的同时更好的保障产品体验的内在一致性。随着 Ant Design 用户群体的激增，业务场景的多样化和复杂化，我们会面临更大的挑战，欢迎大家发挥极客精神和我们一起探索讨论，共同创造出更好用的设计资产。"
  },
  {
  title:"Ant Design|设计资产的秩序之美",
  summary:"Hi，大家好！我是吾笙。非常荣幸在2020年的第一个周六，参加了第三届 SEE Conf 大会。在会上，我给大家分享了这一年来团队为设计资产升级所做的事情、总结的方法以及成果。希望通过这套方法和资产能够赋能给更多的用户，提高设计生产效率的同时更好的保障产品体验的内在一致性。随着 Ant Design 用户群体的激增，业务场景的多样化和复杂化，我们会面临更大的挑战，欢迎大家发挥极客精神和我们一起探索讨论，共同创造出更好用的设计资产。"
  },
  {
    title:"Ant Design|设计资产的秩序之美",
    summary:"Hi，大家好！我是吾笙。非常荣幸在2020年的第一个周六，参加了第三届 SEE Conf 大会。在会上，我给大家分享了这一年来团队为设计资产升级所做的事情、总结的方法以及成果。希望通过这套方法和资产能够赋能给更多的用户，提高设计生产效率的同时更好的保障产品体验的内在一致性。随着 Ant Design 用户群体的激增，业务场景的多样化和复杂化，我们会面临更大的挑战，欢迎大家发挥极客精神和我们一起探索讨论，共同创造出更好用的设计资产。"
  },
]


const List:React.FC = ()=> {
    return (
      <div>
        <ul>
          {ListItem.map((item,index)=>{
            return(
              <li>
                {item.title}
                {item.summary}
              </li>
            )
          })}
        </ul>
      </div>
    );
}

export default List
