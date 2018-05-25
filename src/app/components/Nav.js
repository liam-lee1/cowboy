import React,{Component} from "react";

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.open_kefu = this.open_kefu.bind(this);
        this.redirect = this.redirect.bind(this);
        this.log_out = this.log_out.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    render(){
        return (<div>hello again react,redux</div>)
    }
}
