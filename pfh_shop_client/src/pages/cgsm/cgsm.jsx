import React, {Component} from 'react'
import TopNav from '../../components/TopNav/topNav'
import CarBtn from '../../components/CarBtn/carBtn'
import asd from './img/order-instructions.jpg';
import {} from '@ant-design/icons';
import './cgsm.scss'
export default class Cgsm extends Component {
    render(){
        return(
            <div className='cgsm'>
               <TopNav />
                <div className="cgsm-bar">
                    <div className="header">
                        <span className="line">|</span>
                        <h1>批发说明</h1>
                    </div>
                    <div className="main">
                        <p>
                        <span>PFHOO提供多种合作模式</span>
                        <span>直批和混批</span>
                        <span>初级会员下单满10件起批或消费满100元起支持混批</span>
                        <span>预存500元或近90天累计消费300元可升级VIP1起批和消费</span>
                        <span>金额不受限制</span>
                        </p>
                        <p>
                        <span>预存款</span>
                        <span>预存款500元以上提供多个权限层级</span>
                        <span>详情请参考【会员等级权益】或咨询服务</span>
                        </p>
                        <p>
                        <span>免费拿样</span>
                        <span>当条件未达到直批要求时，需另外支付100元样品押金</span>
                        <span>若样品适下单满300元，100元样品免费可抵贷款和运费，相当于免</span>
                        <span>费拿样</span>
                        <span>若样品不适合7天内退回押金</span>
                        <span>具体请咨询在线客服人员</span>
                        </p>
                        <p>
                        <span>首单包邮</span>
                        <p>
                        新用户享受首单包邮：国内大部分地区免邮，偏远地区除外：西北五省青海、西藏、新疆、甘肃、内蒙古之外，其他地区均可支持；
                                    国内物流主要支持：顺丰特惠陆运（仅限广东）、优速、圆通。产品重量建议不超过1KG。详情请咨询客服人员。
                        </p>
                        </p>
                        <p>
                            <span>以取代发</span>
                            <p>
                            国际一件代发需预存500元,产品代发服务费1.5元/件,包装盒2元/个及收取对应国家运费，每个包裹收取服务费不超过10元；
                                    国内一件代发收取服务费3元,包装费2元,1个订单为5元的代发服务费,客户可根据需求来选择对应代发服务！
                                    详细物流收费标准,请咨询在线客服。
                            </p>
                        </p>
                    </div>
                    <div className="footer">
                        <span className="line">|</span>
                        <h1>交易流程与合作模式</h1>
                    </div>
                    <div className="pic">
                        <img src={asd} alt=""/>
                    </div>
                </div>
               <CarBtn />
            </div>
        )
    }
}