import React, {Component} from 'react'

import './shuju.css'
import lkn from './img/lkn.png'
import {
    RightOutlined
  } from '@ant-design/icons';

export default class Shuju extends Component {
    render(){
        return(
            <div className='shuju'>
              <ul>
                  <li className="mt">
                      <span className="sj">数据:</span>
                      <div>
                      <span className="cj">近30天成交</span>
                      <span className="cjl">29</span>
                      </div>
                      <div>
                      <span className="cg">采购重复率</span>
                      <span className="cgl">55.6%</span>
                      </div>
                      <div>
                      <span className="rj">人均采购数</span>
                      <span className="rjl">4人</span>
                      </div>
                      <div>
                      <span className="jt1"><RightOutlined /></span>

                      </div>
                  </li>
                  <li>
                  <span className="sx">属性:</span>
                      <div>
                      <span className="pp">品牌:</span>
                      <span className="ppp">PTE</span>
                      </div>
                      <div>
                      <span className="wz">镶嵌材物质</span>
                      <span className="wzz">锆石</span>
                      </div>
                      
                      <div>
                      <span className="jt2"><RightOutlined /></span>

                      </div>
                  </li>
                  <li>
                  <span className="pj">评价:</span>
                      <div className="mr">
                      <span className="nc">昵称:</span>
                      <span className="ncc">nimasile</span>
                      </div>
                      <div>
                      <span className="pl">好评！非常好vary good</span>
                      </div>
                      
                      <div>
                      <span className="jt3"><RightOutlined /></span>

                      </div>
                  </li>
                  <li className="limt">
                      <div className="lkn">
                      <img src={lkn} alt=""/>
                      </div>
                      <div>
                      <span className="cp">主营产品:时尚饰品、纯银首饰、精品珠宝</span>
                      <span className="qty">10253件产品</span>
                      </div>
                  </li>
              </ul>
            </div>
        )
    }
}