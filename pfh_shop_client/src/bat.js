import React,{Component} from 'react'

class Demo extends Component {
    async componentDidMount() {
        const res = await fetch("https://m.pfhoo.com/Home/ProductBoxNewsJson").then(res=>{
           return res.json();
        }).then(res=> {
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                列表数据
            </div>
        )
    }
}

export default Demo
