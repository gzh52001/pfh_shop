import React, {Component} from 'react'

import './price.css'
import {
  } from '@ant-design/icons';

export default class Price extends Component {
    render(){
        return(
            <div className='price'>
               <ul>
                   <li className="jianshu">
                       <span>≥</span>
                       <span>1</span>
                       <span>件</span>
                   </li>
                   <li className="jiage">
                       <span>￥</span>
                       <span>11.80</span>
                   </li>
               </ul>
            </div>
        )
    }
}