import React, {Component} from "react";
// import MenuUtama from "../Page/MenuUtama";

class ListMenuUtama extends Component{
    render(){
        return(
            <div>
                <h1><center>Selamat Datang Di Warung Nusantara</center></h1>
                <center>
                    <img src={this.props.linkimage} alt="makanan nusantara" width="600" />
                </center>
            </div>
        )
    }

}

export default ListMenuUtama 